heroku create $1
if [ $? != 0 ]; then
  echo "Appname Not Available, Try Another one."
  read appName
  heroku create $appName
  while [ $? != 0 ]; do
    echo "Appname Not Available, Try Another one."
    read appName
    heroku create $appName
  done
fi
git push heroku master --no-verify
heroku open
