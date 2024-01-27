# Coup

## Deploying to production

Here are the steps to deploy to production

- Locally, create a new branch off of `master` formatted as follows:
  - `git checkout -b MM-DD-YY` (eg `git checkout -b 01-26-24`)
- Comment/Uncomment the noted lines in app.py and CreateApp.py.
- Remove `/dist/` from `client/.gitignore`.
- Run `ember build environment=production` (Not when ssh'd in to AWS, this will crash the server).
- Push everything to `origin`.
- Ssh into AWS.
- Pull the branch from `origin`.
- Activate virtual environment: `. venv/bin/activate`.
  - If file not found, run: `python3 -m venv venv`.
  - Install Python packages if necessary: `pip3 install -r requirements.txt`.
- Restart nginx: `sudo systemctl restart nginx`.
- Run `Python3.app`.
- Verify it is working by visiting [this link](http://ec2-18-191-169-189.us-east-2.compute.amazonaws.com/).
