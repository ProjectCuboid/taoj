![Alt text](https://raw.githubusercontent.com/ProjectCuboid/taoj/refs/heads/main/rawgitstore/logo.svg)

## Project Structure

### SH Scipts

- `newworker.sh`
    - Prepares a git folder for `wrangler` and `deploy.sh`

- `push.sh`
    - Overwrites the git repository

- `deploy.sh`
    - Deploys to *Cloudflare*
    - Usage: `./deploy.sh` with individual worker folders mentioned in `[line 5]` `workers=("example1" "example2" ...)`

## Raw Git Store

### Used  for developement files storage 

Accesed via: `https://raw.githubusercontent.com/ProjectCuboid/taoj/refs/heads/main/rawgitstorage/...`