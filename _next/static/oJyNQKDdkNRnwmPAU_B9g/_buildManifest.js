self.__BUILD_MANIFEST = {
  "/_app.sites": [
    "static/immutable/chunks/1t1gh_27uz-pn.js"
  ],
  "/_error": [
    "static/immutable/chunks/2ulllgfd0wtrq.js"
  ],
  "/published/[docId]": [
    "static/immutable/chunks/3gc6x0vo7k42w.js"
  ],
  "/published_mobile/[docId]": [
    "static/immutable/chunks/2siqz9od_jpok.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/os4yvtkya/_next/:path+",
        "destination": "/_next/:path+"
      },
      {
        "source": "/templates/([\\w-]*-|):id(\\w+)",
        "destination": "/templates/:id"
      },
      {
        "source": "/folders/:channelSlug*",
        "destination": "/"
      },
      {
        "source": "/settings/(members|sharing|design|sso|unowned-folders|my-connectors|api-keys|billing)",
        "destination": "/settings"
      },
      {
        "source": "/sites/:siteId/pages/:pageId/preview",
        "destination": "/sites/:siteId/pages/:pageId"
      },
      {
        "source": "/docs/:docId/preview",
        "destination": "/docs/:docId"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "user-agent",
            "value": "(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|SentiBot|Google-Certificates-Bridge|Google-Read-Aloud|Google-Safety|Iframely|developers\\.google\\.com\\/\\+\\/web\\/snippet|facebookcatalog\\/|meta-externalagent\\/|meta-externalfetcher\\/|MicrosoftPreview\\/|Iframely|Bluesky Cardyb|atlassian-bot|Notion\\/|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\\.com\\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail\\.RU_Bot|discobot|heritrix|findthatfile|europarchive\\.org|NerdByNature\\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot)(.*)"
          }
        ],
        "source": "/(docs|example|public)/:slug",
        "destination": "/docs-robot/:slug"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "user-agent",
            "value": "(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|SentiBot|Google-Certificates-Bridge|Google-Read-Aloud|Google-Safety|Iframely|developers\\.google\\.com\\/\\+\\/web\\/snippet|facebookcatalog\\/|meta-externalagent\\/|meta-externalfetcher\\/|MicrosoftPreview\\/|Iframely|Bluesky Cardyb|atlassian-bot|Notion\\/|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\\.com\\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail\\.RU_Bot|discobot|heritrix|findthatfile|europarchive\\.org|NerdByNature\\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot)(.*)"
          }
        ],
        "source": "/generations/:generationId",
        "destination": "/generations-robot/:generationId"
      },
      {
        "source": "/acceptable-use-policy",
        "destination": "/marketing/acceptable-use-policy"
      },
      {
        "source": "/cookie-notice",
        "destination": "/marketing/cookie-notice"
      },
      {
        "source": "/dpa",
        "destination": "/marketing/dpa"
      },
      {
        "source": "/legal",
        "destination": "/marketing/legal"
      },
      {
        "source": "/privacy",
        "destination": "/marketing/privacy"
      },
      {
        "source": "/privacy-08092024",
        "destination": "/marketing/privacy-08092024"
      },
      {
        "source": "/terms",
        "destination": "/marketing/terms"
      },
      {
        "source": "/terms/archive",
        "destination": "/marketing/terms/archive"
      },
      {
        "source": "/terms/3-24-2023",
        "destination": "/marketing/terms/terms-3-24-2023"
      },
      {
        "source": "/subprocessors",
        "destination": "/marketing/subprocessors"
      },
      {
        "source": "/third-party-terms",
        "destination": "/marketing/third-party-terms"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/en/pricing/:path*",
        "destination": "/marketing/en/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ar/pricing/:path*",
        "destination": "/marketing/ar/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/bg/pricing/:path*",
        "destination": "/marketing/bg/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/bs/pricing/:path*",
        "destination": "/marketing/bs/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/cs/pricing/:path*",
        "destination": "/marketing/cs/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/da/pricing/:path*",
        "destination": "/marketing/da/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/de/pricing/:path*",
        "destination": "/marketing/de/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/el/pricing/:path*",
        "destination": "/marketing/el/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/es/pricing/:path*",
        "destination": "/marketing/es/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/et/pricing/:path*",
        "destination": "/marketing/et/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fa/pricing/:path*",
        "destination": "/marketing/fa/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fi/pricing/:path*",
        "destination": "/marketing/fi/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fr/pricing/:path*",
        "destination": "/marketing/fr/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/he/pricing/:path*",
        "destination": "/marketing/he/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hi/pricing/:path*",
        "destination": "/marketing/hi/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hr/pricing/:path*",
        "destination": "/marketing/hr/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hu/pricing/:path*",
        "destination": "/marketing/hu/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/id/pricing/:path*",
        "destination": "/marketing/id/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/it/pricing/:path*",
        "destination": "/marketing/it/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ja/pricing/:path*",
        "destination": "/marketing/ja/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/kn/pricing/:path*",
        "destination": "/marketing/kn/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ko/pricing/:path*",
        "destination": "/marketing/ko/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/lt/pricing/:path*",
        "destination": "/marketing/lt/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/lv/pricing/:path*",
        "destination": "/marketing/lv/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/nl/pricing/:path*",
        "destination": "/marketing/nl/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/no/pricing/:path*",
        "destination": "/marketing/no/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/pl/pricing/:path*",
        "destination": "/marketing/pl/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/pt-br/pricing/:path*",
        "destination": "/marketing/pt-br/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ro/pricing/:path*",
        "destination": "/marketing/ro/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ru/pricing/:path*",
        "destination": "/marketing/ru/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sl/pricing/:path*",
        "destination": "/marketing/sl/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sq/pricing/:path*",
        "destination": "/marketing/sq/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sr/pricing/:path*",
        "destination": "/marketing/sr/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sv/pricing/:path*",
        "destination": "/marketing/sv/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/th/pricing/:path*",
        "destination": "/marketing/th/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/tl/pricing/:path*",
        "destination": "/marketing/tl/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/tr/pricing/:path*",
        "destination": "/marketing/tr/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ur/pricing/:path*",
        "destination": "/marketing/ur/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/uk/pricing/:path*",
        "destination": "/marketing/uk/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/uz/pricing/:path*",
        "destination": "/marketing/uz/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/vi/pricing/:path*",
        "destination": "/marketing/vi/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/zh-cn/pricing/:path*",
        "destination": "/marketing/zh-cn/pricing/:path*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/zh-tw/pricing/:path*",
        "destination": "/marketing/zh-tw/pricing/:path*"
      },
      {
        "source": "/en/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/es/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/ja/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/ko/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/fr/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/pt-br/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/zh-cn/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/zh-tw/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/de/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/ar/announcements/gamma-3.0",
        "destination": "/example/gamma-3.0"
      },
      {
        "source": "/en/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/es/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/ja/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/ko/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/fr/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/pt-br/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/zh-cn/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/zh-tw/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/de/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "source": "/ar/announcements/:slug*",
        "destination": "/docs/:slug*"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/en",
        "destination": "/marketing/en"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ar",
        "destination": "/marketing/ar"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/bg",
        "destination": "/marketing/bg"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/bs",
        "destination": "/marketing/bs"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/cs",
        "destination": "/marketing/cs"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/da",
        "destination": "/marketing/da"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/de",
        "destination": "/marketing/de"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/el",
        "destination": "/marketing/el"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/es",
        "destination": "/marketing/es"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/et",
        "destination": "/marketing/et"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fa",
        "destination": "/marketing/fa"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fi",
        "destination": "/marketing/fi"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/fr",
        "destination": "/marketing/fr"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/he",
        "destination": "/marketing/he"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hi",
        "destination": "/marketing/hi"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hr",
        "destination": "/marketing/hr"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/hu",
        "destination": "/marketing/hu"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/id",
        "destination": "/marketing/id"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/it",
        "destination": "/marketing/it"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ja",
        "destination": "/marketing/ja"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/kn",
        "destination": "/marketing/kn"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ko",
        "destination": "/marketing/ko"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/lt",
        "destination": "/marketing/lt"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/lv",
        "destination": "/marketing/lv"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/nl",
        "destination": "/marketing/nl"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/no",
        "destination": "/marketing/no"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/pl",
        "destination": "/marketing/pl"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/pt-br",
        "destination": "/marketing/pt-br"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ro",
        "destination": "/marketing/ro"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ru",
        "destination": "/marketing/ru"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sl",
        "destination": "/marketing/sl"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sq",
        "destination": "/marketing/sq"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sr",
        "destination": "/marketing/sr"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/sv",
        "destination": "/marketing/sv"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/th",
        "destination": "/marketing/th"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/tl",
        "destination": "/marketing/tl"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/tr",
        "destination": "/marketing/tr"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/ur",
        "destination": "/marketing/ur"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/uk",
        "destination": "/marketing/uk"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/uz",
        "destination": "/marketing/uz"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/vi",
        "destination": "/marketing/vi"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/zh-cn",
        "destination": "/marketing/zh-cn"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/zh-tw",
        "destination": "/marketing/zh-tw"
      },
      {
        "has": [
          {
            "type": "host",
            "value": "(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app|production-vercel-app.gamma.app)"
          }
        ],
        "source": "/pricing/:path*",
        "destination": "/marketing/en/pricing/:path*"
      },
      {
        "source": "/:path*.map",
        "destination": "/404"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_app.sites",
    "/_error",
    "/api/version",
    "/published/[docId]",
    "/published_mobile/[docId]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()