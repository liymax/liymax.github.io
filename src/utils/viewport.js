{
  function fillScale(scale, width) {
    return `width=${width},initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scale=no`;
  }
  let viewport = document.querySelector("meta[name='viewport']"),
    fixWidth = 750;
  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.name = "viewport";
    document.head.appendChild(viewport);
  } else {
    const matchWidth = (viewport.content || "").match(/width=([^,\s]+)/);
    if (matchWidth && matchWidth[1] && parseInt(matchWidth[1]) > 10) {
      fixWidth = parseInt(matchWidth[1]);
    }
  }
  const iw = window.innerWidth || fixWidth,
    saw = window.screen.availWidth || iw,
    scale = Math.min(iw, saw) / fixWidth;
  viewport.content = fillScale(scale, fixWidth);
}
