<main class="flow-wrapper">
	<section class="left">
		{#each draggableComps as e, i}
			<Icons id={e.type} title='{e.type}' />
		{/each}
	</section>
	<section class="right">
		<svg id="flow-svg" xmlns="http://www.w3.org/2000/svg"
				 width="100%" height="100%" viewBox="0 0 1100 700"/>
	</section>
</main>
<script>
	import {onMount} from "svelte";
	import { select } from 'd3-selection'
	import { drag } from 'd3-drag'
	import Icons from './Icons.svelte'
	import { setAttrs, setStyles, guid } from '../utils/help'
	const draggableComps = [
	  {type: 'square', width: 100, height: 60, data: {}},
	  {type: 'ellipse',width: 100, height: 60, data: {}},
	  {type: 'rhombus',width: 100, height: 60, data: {}}
	]
	const ItemList = []
	let activeLink = {}
	function getItemByNodeId(nodeId) {
	  return ItemList.find(e => e.nodeId === nodeId) || {}
	}
	function getScrollXY() {
	  const sx = window.scrollX, sy = window.scrollY
	  return {sx, sy}
	}
	function hasMatch(sName, eName) {
	  return (sName === eName && ['left', 'right'].includes(sName)) ||
			(sName === 'bottom' && eName === 'top')
	}
	function getPointPos(posName, item) {
	  let {sx, sy} = getScrollXY()
	  const {pos: p, offset: o, width, height} = item
	  const pos = {x: p.x + o.x - sx, y: p.y + o.y - sy}
	  if (posName === 'top') {
	    pos.y -= height / 2
	  } else if (posName === 'bottom') {
	    pos.y += height / 2
	  } else if (posName === 'left') {
	    pos.x -= width / 2
	  } else if (posName === 'right') {
	    pos.x += width / 2
	  }
	  return pos
	}
	function drawVertLine(begin, end) {
	  const half = (end.y - begin.y) / 2
	  let r1 = 'a3 3,0,0,0,3 3'; let r2 = 'a3,3 0 0 1 3,3'; let vo = 3; let ho = 3
	  if (Math.abs(end.x - begin.x) < 8) {
	    r1 = ''; r2 = ''; vo = 0; ho = 0
	  } else if (end.x < begin.x) {
	    r1 = 'a3 3,0,0,1,-3 3'; r2 = 'a3,3 0 0 0 -3,3'
	    ho = -3; vo = 3
	  }
	  return `M${begin.x},${begin.y}v${half - vo}${r1}h${end.x - begin.x - ho * 2}${r2}v${half - vo - 1}l3,-3m-6,0l3,3`
	}
	function drawHorizonLine(begin, end, hOffset) {
	  let horizon = end.x - begin.x, vo = 3, ho = 3
	  let r1 = 'a3 3,0,0,1,3 3', r2 = 'a3,3 0 0 1 -3,3'
	  let arw = 'm3,3l-3,-3l3,-3'
	  if (hOffset > 0) {
	    horizon = hOffset > horizon ? hOffset : horizon + 20
	  } else {
	    ho = -3
	    r1 = 'a3 3,0,0,0,-3 3'; r2 = 'a3,3 0 0 0 3,3'
	    arw = 'm-3,-3l3,3l-3,3'
	    horizon = hOffset < horizon ? hOffset : horizon - 20
	  }
	  return `M${begin.x},${begin.y}h${horizon - ho}${r1}v${end.y - begin.y - vo * 2}${r2}h${end.x - begin.x - horizon + ho}${arw}`
	}
	function addLinkDrag(points, item) {
	  const rightWrapper = select('.flow-wrapper>.right')
	  const {top, left} = rightWrapper.node().getBoundingClientRect()
	  const {sx, sy} = getScrollXY()
	  points.forEach(point => {
	    let posName = point.attr('name')
	    if (posName !== 'top') { // 开始点
	      point.call(drag().on('drag', (e) => {
	        activeLink.end = { x: e.x - left - sx, y: e.y - top - sy}
	        const { begin, end, target , hOffset} = activeLink
	        const drawLine = ['left','right'].includes(posName) ? drawHorizonLine : drawVertLine
	        target && target.attr('d', drawLine(begin, end, hOffset))
	      }).on('start', ()=> {
	        activeLink.hOffset = posName === 'left' ? -30 : 30
	        activeLink.fromNodeId = point.attr('node-id')
	        activeLink.beginPosName = posName
	        activeLink.begin = getPointPos(posName, item)
	        activeLink.target = select('#flow-svg').append('path')
	        setAttrs(activeLink.target, { stroke: '#b9bdc4', 'stroke-width': 2, fill: 'none' })
	      }).on('end', () => {
	      	const {toNodeId, target} = activeLink
	        if (!toNodeId) {
	          target && target.remove()
	        }
	        Object.assign(activeLink, {fromNodeId: null,target: null, toNodeId: null })
	      }).container(() => rightWrapper))
	    }

	    if (posName !== 'bottom') { // 结束点
	      point.on('mouseenter',(e) => {
	        const tp = select(e.target), nodeId = tp.attr('node-id'),name = tp.attr('name')
	        if (!activeLink.fromNodeId || nodeId === activeLink.fromNodeId) return
	        if(!hasMatch(activeLink.beginPosName, name)) return
	        const fromItem = getItemByNodeId(activeLink.fromNodeId)
	        activeLink.toNodeId = nodeId
	        activeLink.end = getPointPos(name, getItemByNodeId(nodeId))
	        const { begin, end, target, hOffset } = activeLink
	        const drawLine = ['left','right'].includes(name) ? drawHorizonLine : drawVertLine
	        target && target.attr('d', drawLine(begin, end, hOffset))
	        item.links.push({...activeLink})
	        fromItem.links.push({...activeLink})
	        Object.assign(activeLink, {fromNodeId: null,target: null, toNodeId: null })
	      })
	    }
	  })
	}

	function addLinkNode(node, item) {
	  const topPoint = node.append('span').classed('link-point-top', true)
	  const bottomPoint = node.append('span').classed('link-point-bottom', true)
	  const leftPoint = node.append('span').classed('link-point-left', true)
	  const rightPoint = node.append('span').classed('link-point-right', true)
	  setAttrs(topPoint, {name: 'top','node-id': item.nodeId})
	  setAttrs(bottomPoint, {name: 'bottom','node-id': item.nodeId})
	  setAttrs(leftPoint, {name: 'left','node-id': item.nodeId})
	  setAttrs(rightPoint, {name: 'right','node-id': item.nodeId})
	  addLinkDrag([bottomPoint, topPoint, leftPoint, rightPoint], item)
	}
	function updateLinks(item, sx, sy) {
	  const {nodeId, links, offset: o, pos: p, width: w, height: h} = item
	  links.forEach(link => {
	    const { beginPosName, fromNodeId, toNodeId, target, hOffset} = link
	    let bh = 0, bw = 0,eh = 0, ew = 0
	    if (fromNodeId === nodeId) {
	    	const {offset: os, pos: ps, width: ws, height: hs} = getItemByNodeId(toNodeId)
	      if (beginPosName === 'bottom') {
	        bh = h / 2
	        eh = -hs / 2
	      } else {
	      	bw = beginPosName === 'right' ? w / 2 : -w / 2
	        ew = beginPosName === 'right' ? ws / 2 : -ws / 2
	      }
	      link.begin = {x: p.x + o.x + bw - sx, y: p.y + o.y + bh - sy}
	      link.end = {x: ps.x + os.x + ew - sx, y: ps.y + os.y + eh - sy}
	    } else {
	      const {offset: os, pos: ps, width: ws, height: hs} = getItemByNodeId(fromNodeId)
	      if (beginPosName === 'bottom') {
	        bh = hs / 2
	        eh = -h / 2
	      } else {
	        bw = beginPosName === 'right' ? ws / 2 : -ws / 2
	        ew = beginPosName === 'right' ? w / 2 : -w / 2
	      }
	      link.begin = {x: ps.x + os.x + bw - sx, y: ps.y + os.y + bh - sy}
	      link.end = {x: p.x + o.x + ew - sx, y: p.y + o.y + eh - sy}
	    }
	    console.log('hOffset:', hOffset)
	    const drawLine = ['left','right'].includes(beginPosName) ? drawHorizonLine : drawVertLine
	    target.attr('d', drawLine(link.begin, link.end, hOffset))
	  })
	}
	function addNodeDrag(node, item, wrapper, sx, sy) {
	  let dsp = {}, beginOffset = { ...item.offset }
	  node.call(drag().on('start', (e) => {
	    dsp = { x: e.x, y: e.y }
	  }).on('drag', (e) => {
	    item.offset.x = beginOffset.x + e.x - dsp.x
	    item.offset.y = beginOffset.y + e.y - dsp.y
	    const { offset: o, pos: p, width, height, } = item
	    node.style('transform', `translate(${p.x + o.x - width / 2 - sx}px,${p.y + o.y - height / 2 - sy}px)`)
	    updateLinks(item,sx, sy)
	  }).on('end', () => {
	    beginOffset = { ...item.offset }
	  }).container(() => wrapper))
	}

	function addNode(item, wrapper) {
	  let {pos, type, width, height, offset: o, nodeId} = item
	  if (o) {
	    item.pos = {x: pos.x + o.x, y: pos.y + o.y}
	  }
	  item.nodeId = nodeId || guid()
	  item.links = []
	  item.offset = {x: 0, y: 0}
	  const node = wrapper.append('div').attr('class', 'flow-node').attr('id', item.nodeId)
	  const {sx, sy} = getScrollXY()
	  const transform = `translate(${pos.x - width / 2 - sx}px, ${pos.y - height / 2 - sy}px)`
	  setStyles(node, {width: width + 'px', height: height + 'px', transform})
	  if (type === 'ellipse') {
	    node.append('div').attr('class', 'wrapper').style('clip-path', 'ellipse(50% 50% at 50% 50%)')
	    node.append('div').attr('class', 'content').style('clip-path', 'ellipse(50% 50% at 50% 50%)')
	  } else if (type === 'rhombus') {
	    node.append('div').attr('class', 'wrapper').style('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
	    node.append('div').attr('class', 'content').style('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)')
	  } else {
	    node.append('div').attr('class', 'wrapper').style('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)')
	    node.append('div').attr('class', 'content').style('clip-path', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)')
	  }
	  ItemList.push(item)
	  addNodeDrag(node, item, wrapper, sx, sy)
	  addLinkNode(node, item)
	}
	function initDraggableComps() {
	  const comps = select('.flow-wrapper>.left').selectAll('svg')
	  comps.data(draggableComps).join('svg').each(function (d, index) {
	    let  compCopy = null, dsp = {}
	    const comp = select(this)
	    comp.call(drag().container(() => select('.flow-wrapper'))
	      .on('drag', (e) => {
	        const { x, y } = dsp
	        compCopy.style('transform', `translate(${e.x - x}px,${e.y - y}px)`)
	      }).on('start', (e) => {
	        dsp = { x: e.x, y: e.y }
	        compCopy = comp.clone(true)
	        compCopy.style('position', 'absolute').style('top', index * 50 + 'px')
	      }).on('end', (e) => {
	        compCopy.remove()
	        const rightWrapper = select('.flow-wrapper>.right')
	        const {x, y, width, height} = rightWrapper.node().getBoundingClientRect()
	        if (e.x < x || e.x > x + width || e.y < y || e.y > y + height) return
	        const pos = {x: e.x - x, y: e.y - y}
	        addNode({...d, pos}, rightWrapper)
	      })
	    )
	  })
	}
	onMount(() => {
	  initDraggableComps()
	})

</script>
<style lang="less">
	.link-point(){
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 15px;
		height: 15px;
		border: 1px solid #999;
		border-radius: 50%;
		background-color: #fff;
		opacity: 0;
		transition: opacity 0.2s ease;
		&:hover{
			opacity: 1;
		}
	}
	:global(.link-point-top){
		.link-point();
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.link-point-right){
		.link-point();
		top: 50%;
		right: 0;
		transform: translate(50%, -50%);
	}
	:global(.link-point-bottom){
		.link-point();
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 50%);
	}
	:global(.link-point-left){
		.link-point();
		left: 0;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	:global(.flow-node){
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		& > :global(.wrapper){
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #999;
			width: 100%;
			height:  100%;
		}
		& > :global(.content){
			content: "";
			display: block;
			position: absolute;
			top: 2px;
			left: 2px;
			background-color: aquamarine;
			width: calc(100% - 4px);
			height:  calc(100% - 4px);
		}
	}
	.flow-wrapper{
		display: flex;
		margin: 15px;
		.left{
			display: inline-flex;
			flex-direction: column;
			width: 80px;
			min-width: 80px;
			position: relative;
		}
		.right{
			width: 1100px;
			height: 700px;
			border: 1px solid #999;
			position: relative;
		}
	}
</style>
