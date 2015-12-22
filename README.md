# ER-resources
this repo containes an up to date boilerplate of all of the Erickson Living resources needed to start a project quickly

## getting started

clone this repo
```
$ git clone  https://github.com/alejandro-londono/ER-resources.git
```

then you can start to add what you need! 

be sure not to push back to this repo, not that you could. its in my name for a reason. however if you wish to push to the LP2 repo without issues, I suggest you remove the hidden .git folder that tracks and pushes everything to this repo you can do in your terminal

```
$ ls -lah
```

will give you this output

```
total 296
drwxr-xr-x  18 user  admin   612B Dec 16 08:57 .
drwxr-xr-x  37 user  admin   1.2K Dec 16 08:47 ..
drwxr-xr-x   5 user  admin   170B Dec 16 09:13 .git
-rw-r--r--   1 user  admin   263B Dec 16 09:10 .gitignore
drwxr-xr-x   6 user  admin   204B Dec 16 08:46 .sass-cache
-rw-r--r--   1 user  admin    27K Dec 16 08:46 brochure.php
-rw-r--r--@  1 user  admin    27K Dec 16 09:06 cc-brochure-long-form.php
-rw-r--r--   1 user  admin   2.1K Dec 16 08:46 cc-brochure-short-form.php
-rw-r--r--   1 user  admin   900B Dec 16 08:46 config.rb
drwxr-xr-x   3 user  admin   102B Dec 16 08:46 css
-rw-r--r--   1 user  admin   3.4K Dec 16 08:46 font-list.html
drwxr-xr-x   7 user  admin   238B Dec 16 08:50 img
-rw-r--r--   1 user  admin   6.9K Dec 16 09:04 index.php
drwxr-xr-x  10 user  admin   340B Dec 16 08:46 js
drwxr-xr-x   5 user  admin   170B Dec 16 08:46 sass
drwxr-xr-x   5 user  admin   170B Dec 16 08:46 stylesheets
-rw-r--r--   1 user  admin    28K Dec 16 08:46 tour.php
-rw-r--r--   1 user  admin    35K Dec 16 08:46 variables.php
```

then follow these steps in your terminal to remove the folder

```  
$ rm --cached repo_path     #deleting reference to submodule HEAD (no trailing slash)
$ rm -rf .gitmodules        #removing .gitmodules
$ rm -rf repo_path/.git     # removing .git folder which tracks changes from old repo
$ git add repo_path         #adding the folder back to the HEAD will track changes
$git commit -m "your commit message"

```


Happy coding!

Let me know if you wish to submit a pull request
