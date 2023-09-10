import React from "react";

const Ads = () => {
  const adSenseScript = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6595910908105838"
            crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-6595910908105838"
         data-ad-slot="2127429688"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;
  return <div dangerouslySetInnerHTML={{ __html: adSenseScript }} />;
};

export default Ads;
