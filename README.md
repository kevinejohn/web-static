# Use

    npm install

    # Update IP
    export WEB_STATIC=XXX.XXX.XXX.XXX

    npm run init

    # Copy files to the public folder
    rsync --archive --progress --compress ~/some_folder/ core@$WEB_STATIC:/home/core/web-static/public

    # DONE


# Reload

    npm run restart
