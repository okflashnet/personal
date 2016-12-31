function StartJS(t)
	{
	function s()
		{
		if("entry"in t.feed)
			{
			var s=t.feed.entry.length;
			numberfeed=s,ii=0;
			for(var e=0;
			s>e;
			e++)
				{
				for(var a,o=t.feed.entry[e],r=o.title.$t,l=o.published.$t.substring(0,10),p=0;
				p<o.link.length;
				p++)if("alternate"==o.link[p].rel)
					{
					a=o.link[p].href;
					break
				}
				for(var i="",p=0;
				p<o.link.length;
				p++)if("enclosure"==o.link[p].rel)
					{
					i=o.link[p].href;
					break
				}
				var n="";
				if("category"in o)for(var p=0;
				p<o.category.length;
				p++)
					{
					n=o.category[p].term;
					var m=n.lastIndexOf(";
					");
					-1!=m&&(n=n.substring(0,m)),postLabels[ii]=n,postTitle[ii]=r,postDate[ii]=l,postUrl[ii]=a,postMp3[ii]=i,10>e?postBaru[ii]=!0:postBaru[ii]=!1,ii+=1
				}
			}
		}
	}
	s(),sortBy="titleasc",sortPosts(sortBy),sortlabel(),JsMenuLoad=!0,displayMenuJS(),document.write()
}
function sortPosts(t)
	{
	function s(t,s)
		{
		var e=postTitle[t];
		postTitle[t]=postTitle[s],postTitle[s]=e;
		var e=postDate[t];
		postDate[t]=postDate[s],postDate[s]=e;
		var e=postUrl[t];
		postUrl[t]=postUrl[s],postUrl[s]=e;
		var e=postLabels[t];
		postLabels[t]=postLabels[s],postLabels[s]=e;
		var e=postMp3[t];
		postMp3[t]=postMp3[s],postMp3[s]=e;
		var e=postBaru[t];
		postBaru[t]=postBaru[s],postBaru[s]=e
	}
	for(var e=0;
	e<postTitle.length-1;
	e++)for(var a=e+1;
	a<postTitle.length;
	a++)"titleasc"==t&&postTitle[e]>postTitle[a]&&s(e,a),"titledesc"==t&&postTitle[e]<postTitle[a]&&s(e,a),"dateoldest"==t&&postDate[e]>postDate[a]&&s(e,a),"datenewest"==t&&postDate[e]<postDate[a]&&s(e,a),"orderlabel"==t&&postLabels[e]>postLabels[a]&&s(e,a)
}
function sortlabel()
	{
	sortBy="orderlabel",sortPosts(sortBy);
	for(var t=0,s=0;
	s<postTitle.length;
	)
		{
		OKSitemapLabels=postLabels[s],firsti=t;
		do t+=1;
		while(postLabels[t]==OKSitemapLabels);
		if(s=t,sortPosts2(firsti,t),s>postTitle.length)break
	}
}
function sortPosts2(t,s)
	{
	function e(t,s)
		{
		var e=postTitle[t];
		postTitle[t]=postTitle[s],postTitle[s]=e;
		var e=postDate[t];
		postDate[t]=postDate[s],postDate[s]=e;
		var e=postUrl[t];
		postUrl[t]=postUrl[s],postUrl[s]=e;
		var e=postLabels[t];
		postLabels[t]=postLabels[s],postLabels[s]=e;
		var e=postMp3[t];
		postMp3[t]=postMp3[s],postMp3[s]=e;
		var e=postBaru[t];
		postBaru[t]=postBaru[s],postBaru[s]=e
	}
	for(var a=t;
	s-1>a;
	a++)for(var o=a+1;
	s>o;
	o++)postTitle[a]>postTitle[o]&&e(a,o)
}
function displayMenuJS()
	{
	for(var t=0,s=0;
	s<postTitle.length;
	)
		{
		OKSitemapLabels=postLabels[s],document.write("<p/>"),document.write('<span class="OKSitemapLabel"><a href="/search/label/'+OKSitemapLabels+'">'+OKSitemapLabels+"</a></span><ol class='OKPostname'>"),firsti=t;
		do document.write("<li>"),document.write('<a href="'+postUrl[t]+'" title="'+postTitle[t]+'">'+postTitle[t]+"</a>"),1==postBaru[t]&&document.write(' - <span class="new">New!</span>'),document.write("</li>"),t+=1;
		while(postLabels[t]==OKSitemapLabels);
		if(s=t,document.write("</ol>"),sortPosts2(firsti,t),s>postTitle.length)break
	}
}
var periksa="100",postTitle=new Array,postUrl=new Array,postMp3=new Array,postDate=new Array,postLabels=new Array,postBaru=new Array,sortBy="titleasc",JsMenuLoad=!1,numChars=250,postFilter="",numberfeed=0;
