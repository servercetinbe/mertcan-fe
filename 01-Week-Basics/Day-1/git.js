/* 1-Git init
Turns the current directory into a git repository. Creates a folder named .git inside the project.
It is the place where files and changes managed by Git are stored.
2-Git Clone git clone <repo-url> Copies a git repository.
3-Git Add git add <file-name> Adds a single file or git add . Adds all files.

4-Git Commit git commit -m "message" Saves the changes made.
Commit creates a change history and saves the current state of the project.

5-Git Status git status Shows the status of the project.
Shows which files have changed and which ones are not committed.

6-Git Push Sends the commits in your local repository to a remote repository.
Usually used to send code to a server or a platform like GitHub.
    git push <remote> <branch-name>
    git push origin master  // pushes to the master branch.

7-Git Pull Downloads the changes from a remote repository to your local repository and merges them into the current branch.
git pull <remote> <branch-name>

8-Git Branch git branch Lists the current branches.
git branch <branch-name> # Creates a new branch
git branch -d <branch-name> # Deletes a branch
git branch -m <new-branch-name> # Renames a branch

9-Git Checkout git checkout <branch-name> Switches to a branch
or reverts a file to its previous state.
    git checkout -b <branch-name> Creates a new branch and switches to it.

10-Git Merge Merges two branches.
11-Git Log Shows the commit history of the project.
Shows who made the commit and when it was made.

12-Git Remote git remote Lists the remote repositories.
Used to manage remote repositories.
    git remote -v          # Lists the current remote repositories
git remote add <name> <url>  # Adds a new remote repository


13-Git Fetch Downloads the changes from a remote repository to your local repository.
Does not modify the working directory. Only downloads new commit information.
 git fetch origin master  # downloads the master branch from the origin remote repository.


14-Git Reset Goes back to a commit.

15-Git Revert Reverts a commit and adds it as a new commit.
    Unlike git reset, it does not modify the commit history, it creates a new commit.




    To add separate commits for each folder, you can follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of your project using the `cd` command.
3. Use the `git status` command to see the current status of your repository.
4. Use the `git add <folder>` command to stage the changes in each folder individually. Replace `<folder>` with the name of the folder you want to commit.
5. Use the `git commit -m "Commit message"` command to create a commit for each folder. Replace `"Commit message"` with a descriptive message for each commit.
6. Repeat steps 4 and 5 for each folder you want to commit separately.
7. Finally, use the `git push` command to push all the commits to your GitHub repository.

By following these steps, you will be able to add separate commits for each folder in your repository 




 */
