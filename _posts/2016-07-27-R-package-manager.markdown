---
layout: post
title:  "R语言的包管理"
date:   2016-07-27 15:52:28 +0800
categories: language study
---

R语言的包管理是非常方便的，其本身就是语言的一部分。
掌握好该技术对于学习R语言势必事半功倍，而且这是极易掌握的。

{% highlight R %}
install.packages("name")
{% endhighlight %}
> 安装名称为name的软件包，如nstall.packages("RMySQL")将安装MySQL的支持包。

{% highlight R %}
installed.packages()
{% endhighlight %}
> 显示当前环境中安装的软件包，包含详细信息。**注意和上面方法的差异**

{% highlight R %}
library()
{% endhighlight %}
> 显示当前安装的包的简要列表。

{% highlight R %}
old.packages()
{% endhighlight %}
> 检查CRAN上是否有已安装包的最新版本。

{% highlight R %}
update.packages()
{% endhighlight %}
> 更新已安装包的最新版本。

{% highlight R %}
remove.packages(c("pkg1","pkg2") , lib = file.path("library path"))
{% endhighlight %}
> 删除指定的软件包。

# reference

[R语言入门视频][R语言入门视频]   
[R语言官网][R语言官网]    
[R语言基础教程][R语言基础教程]

[R语言入门视频]: http://www.imooc.com/u/2130096/courses?sort=publish
[R语言官网]: https://www.r-project.org/
[R语言基础教程]: http://www.yiibai.com/r/r_matrices.html