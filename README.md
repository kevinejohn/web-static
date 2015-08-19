# Use

    npm install

    # Update IP
    export WEB_STATIC=XXX.XXX.XXX.XXX

    npm run init

    # Copy files to the public folder
    rsync --archive --progress --compress ~/some_folder/ core@$WEB_STATIC:/home/core/web-static/public

    # DONE. Go to the IP address to see your hosted files


# Reload

    npm run restart
