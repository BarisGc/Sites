
### git commit --amend

- git commit --amend -m "an updated commit message"
- Once you have made the changes to a repository, you are ready to amend your commit. You can do this by using the –no-edit flag:

git commit --amend --no-edit

This command will change the files in your last commit. It will not change the message associated with the commit because we have not used the -m flag.

-"shift + z" to save and exit

### git log -n 2
- son 2 taneyi getirir

### git revert commitId
- The git revert command is a forward-moving undo operation that offers a safe method of undoing changes. Instead of deleting or orphaning commits in the commit history, a revert will create a new commit that inverses the changes specified. Git revert is a safer alternative to git reset in regards to losing work

### git reset --hard commitId
- o commite kadarki hepsini siler

### git diff e4e6b1c70880b0ca692d18d3e05e9306441adc14..0d43b6b879dddcd99a85fea43c0dc0f3a13d2f4e index.md

### branch
- git branch >>>>> var olan branchları gösterir.
- git branch header >>>>> header branchı oluşturur.
- git checkout header >>>>> header'a geçer
- git checkout -b header >>>>> header oluşturur ve geçiş yapar
- git branch -D header >>>>> header siler
### stash
- git stash >>>>> son commit sonrasını saklar
- git stash list >>>>> stash listesini gösterir
- git stash clear >>>>> stash siler
- git stash pop >>>>> stash'a atılanları geri getirir ve stashı listeden kaldırır
- git stash apply stash@{0} >>>>> bu kimlikli stash'a atılanları geri getirir ama stashı listeden kaldırmaz.

### merge
- git merge branchName
- git merge --squash branchName >>>>> git commit -m "master ve branch birleştirildi" >>>>> merge yapar ama son olarak bir commit bildirilmesini ister, böylece daha
  izlenebilir olur.
- git merge --abort >>>>> merge geri alır

### rebase
- izlenebilirlik olmadan merge eder