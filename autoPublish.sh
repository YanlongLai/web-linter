# go to resource
cd ./src/resource/

# Python find duplicate content on Viki
python viki.py
cd -

# Git: add and commit changes
git commit -a -m "hourly find viki duplicate content on `date`"

# send data to Git server
git push
