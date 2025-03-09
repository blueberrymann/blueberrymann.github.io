// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-发表物",
          title: "发表物",
          description: "期待未来会有发表物吧(*❦ω❦)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-游记",
          title: "游记",
          description: "这里是旅行游记~",
          section: "Navigation",
          handler: () => {
            window.location.href = "/travel/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "这是我的仓库，希望未来能有很多星星🌠",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "这是我的简历，您可以通过点击右上方的“pdf”按钮下载我的简历",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-发表物",
              title: "发表物",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-项目",
              title: "项目",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-博客",
              title: "博客",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-通往404的神秘轨道",
              title: "通往404的神秘轨道",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-数学知识",
      
        title: "数学知识",
      
      description: "学习数学知识思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/acwing-%E6%95%B0%E5%AD%A6%E7%9F%A5%E8%AF%86/";
        
      },
    },{id: "post-数据结构",
      
        title: "数据结构",
      
      description: "学习数据结构思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/";
        
      },
    },{id: "post-20250225力扣每日一题",
      
        title: "20250225力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0227-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250225力扣每日一题",
      
        title: "20250225力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0225-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-2025第一周蓝桥杯每日一题",
      
        title: "2025第一周蓝桥杯每日一题",
      
      description: "记录蓝桥杯每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0223-0227-%E8%93%9D%E6%A1%A5%E6%9D%AF%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250224力扣每日一题",
      
        title: "20250224力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0224-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250223力扣每日一题",
      
        title: "20250223力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0223-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250222力扣每日一题",
      
        title: "20250222力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0222-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250221力扣每日一题",
      
        title: "20250221力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0221-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250220力扣每日一题",
      
        title: "20250220力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0220-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-面向语义的数据质量评价方法",
      
        title: "面向语义的数据质量评价方法",
      
      description: "在2025.02.19之前，我查找了一些关于数据质量评价方法的资料，但是感觉都是一些“方法”，并不像NLP中的那些有具体的数学公式。此次进一步调研，旨在找到像困惑度，对齐度，重叠度等量化指标以及衡量它们的最新方法",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%95%B0%E6%8D%AE%E8%B4%A8%E9%87%8F%E8%AF%84%E4%BB%B7%E6%96%B9%E6%B3%95/";
        
      },
    },{id: "post-20250219力扣每日一题",
      
        title: "20250219力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0219-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-动态规划",
      
        title: "动态规划",
      
      description: "学习动态规划思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/";
        
      },
    },{id: "post-20250218力扣每日一题",
      
        title: "20250218力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0218-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250217力扣每日一题",
      
        title: "20250217力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0217-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250216力扣每日一题",
      
        title: "20250216力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0216-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250215力扣每日一题",
      
        title: "20250215力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0215-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-二分-hot100-amp-acwing-amp-个人总结",
      
        title: "二分（hot100 &amp; acwing &amp; 个人总结）",
      
      description: "学习二分查找思想和板子，总结经验，刷题",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hot100-and-acwing-%E4%BA%8C%E5%88%86/";
        
      },
    },{id: "post-树与图的深度优先遍历",
      
        title: "树与图的深度优先遍历",
      
      description: "学习树与图的深度优先遍历思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%A0%91%E4%B8%8E%E5%9B%BE%E7%9A%84%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86/";
        
      },
    },{id: "post-20250213力扣每日一题",
      
        title: "20250213力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0213-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-拓扑排序",
      
        title: "拓扑排序",
      
      description: "学习拓扑排序思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F/";
        
      },
    },{id: "post-有用的终端指令",
      
        title: "有用的终端指令",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E4%B8%80%E4%BA%9B%E6%9C%89%E7%94%A8%E7%9A%84%E7%BB%88%E7%AB%AF%E6%8C%87%E4%BB%A4/";
        
      },
    },{id: "post-metrics-of-data-quality-in-llm",
      
        title: "Metrics of Data Quality in LLM",
      
      description: "目前正在研究LLM中评价数据质量的指标都有什么",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/DataQuality-in-LLM/";
        
      },
    },{id: "post-论文生词-amp-学术词典",
      
        title: "论文生词&amp;学术词典",
      
      description: "记录在阅读论文时遇到的生词和陌生概念",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E8%AE%BA%E6%96%87%E7%94%9F%E8%AF%8D/";
        
      },
    },{id: "post-20250212力扣每日一题",
      
        title: "20250212力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0212-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-hot100系列-哈希",
      
        title: "hot100系列——哈希",
      
      description: "hot100系列——哈希的学习笔记：知识点、思想、代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hot100-hash/";
        
      },
    },{id: "post-20250211力扣每日一题",
      
        title: "20250211力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0211-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250210力扣每日一题",
      
        title: "20250210力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0210-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250209力扣每日一题",
      
        title: "20250209力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0209-%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-bfs",
      
        title: "BFS",
      
      description: "学习BFS思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/BFS/";
        
      },
    },{id: "post-20250208力扣每日一题",
      
        title: "20250208力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0208%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250207力扣每日一题",
      
        title: "20250207力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0207%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-子集-amp-20250205每日一题",
      
        title: "子集 &amp; 20250205每日一题",
      
      description: "学习区间和思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E5%AD%90%E9%9B%86/";
        
      },
    },{id: "post-hot100系列-链表",
      
        title: "hot100系列——链表",
      
      description: "hot100系列——链表的学习笔记：知识点、思想、代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hot100-%E9%93%BE%E8%A1%A8/";
        
      },
    },{id: "post-高精度",
      
        title: "高精度",
      
      description: "学习高精度思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E9%AB%98%E7%B2%BE%E5%BA%A6/";
        
      },
    },{id: "post-区间合并",
      
        title: "区间合并",
      
      description: "学习区间合并思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E5%8C%BA%E9%97%B4%E5%90%88%E5%B9%B6/";
        
      },
    },{id: "post-区间和",
      
        title: "区间和",
      
      description: "学习区间和思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E5%8C%BA%E9%97%B4%E5%92%8C/";
        
      },
    },{id: "post-20250204力扣每日一题",
      
        title: "20250204力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/0204%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-位运算",
      
        title: "位运算",
      
      description: "学习位运算思想和板子",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E4%BD%8D%E8%BF%90%E7%AE%97/";
        
      },
    },{id: "post-双指针问题",
      
        title: "双指针问题",
      
      description: "使用双指针解决一系列问题",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E5%8F%8C%E6%8C%87%E9%92%88/";
        
      },
    },{id: "post-20250203力扣每日一题",
      
        title: "20250203力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%AF%8F%E5%A4%A9%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-20250202力扣每日一题",
      
        title: "20250202力扣每日一题",
      
      description: "记录每日一题的解题思路的求解代码",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/%E6%AF%8F%E6%97%A5%E4%B8%80%E9%A2%98/";
        
      },
    },{id: "post-第k个数",
      
        title: "第k个数",
      
      description: "使用快排的思想寻找数组中第k大的数",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Hello-world/";
        
      },
    },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "travel-厦门游记",
          title: '厦门游记',
          description: "在厦门玩了5天，不愧是旅行城市，真的让人流连忘返",
          section: "Travel",handler: () => {
              window.location.href = "/travel/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
