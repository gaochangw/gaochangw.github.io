---
permalink: /
title: "Chang Gao - Incoming Assistant Professor @ TU Delft"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Chang Gao (高唱). I am an Assistant Professor at the [Department of Microeletronics, TU Delft](http://elca.tudelft.nl/People/bio.php?id=840). Currently I am a Postdoctoral Researcher in the [Sensors Group](http://sensors.ini.uzh.ch/home.html) at the [Institute of Neuroinformatics (INI), University of Zurich and ETH Zurich](https://www.ini.uzh.ch/en.html). I am designing energy-efficient AI hardware (FPGAs & ASICs) and software optimization methods for the training and inference of deep neural networks (DNNs). 

Selected Publications
======
- [[TNNLS  2022](https://arxiv.org/abs/2108.02297)] The Spartus accelerator exploiting spatio-temporal sparsity in Long Short-Term Memory (LSTM)
- [[ISSCC  2022](https://ieeexplore.ieee.org/abstract/document/9731708)] An ultra low power real-time keyword spotting chip  
- [[FPGA   2018](https://dl.acm.org/doi/abs/10.1145/3174243.3174261)] The DeltaRNN accelerator exploting temporal sparsity in Gated-Recurrent Unit (GRU) 
- [[ICRA   2020](https://ieeexplore.ieee.org/abstract/document/9196984)] A real-time end-to-end robotic control system using EdgeDRNN
- [[AICAS  2020](https://ieeexplore.ieee.org/document/9074001)] The EdgeDRNN accelerator (Best Paper Award)
- [[JETCAS 2020](https://ieeexplore.ieee.org/abstract/document/9268992)] The invited journal version of EdgeDRNN
- [[ISCAS  2019](https://ieeexplore.ieee.org/abstract/document/8702290)] A spoken digit recognition system using DeltaRNN and the spiking cochlea

Awards
======
- [2022] Distinction of PhD Thesis by the Faculty of Science, University of Zurich ([Link](https://www.mnf.uzh.ch/dam/jcr:960266b1-0a30-4d8d-9b05-cd08a181d6d7/DO_TeilA_E_2015-11-30.pdf))
- [2021] 2020 Chinese Government Award for Outstanding Self-finance Students Abroad (国家优秀自费留学生奖学金) ([Link](http://www.tochinajob.com:8080/publish/portal64/tab4128/info145167.htm))
- [2021] Misha Mahowald Prize for Neuromorphic Engineering (As a team member) ([Link](https://www.mahowaldprize.org/prize-awards/prize-2020#h.lzd88rk7n7fr))
- [2020] Best Paper Award of the IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS) ([Link](https://ee.ethz.ch/news-and-events/d-itet-news-channel/2020/09/best-paper-award-for-institute-of-neuroinformatics.html))
- [2016] MSc Outstanding Achievement Award @ Imperial Colleage London ([Link](https://www.imperial.ac.uk/electrical-engineering/study/current-students-course-handbook/postgraduate-prizes/msc-prizes/))

More About Me
======
- [INI Profile](https://services.ini.uzh.ch/admin/modules/uzh/person.php?id=62676)
- [Demo Videos (YouTube)](https://www.youtube.com/channel/UCh001aqZUZfYcMXL57_dU-Q)

<!-- A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
2. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
3. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
4. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
5. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
6. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
