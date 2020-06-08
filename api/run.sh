echo ""
echo "---- NPM INSTALL"
echo ""
npm install

echo ""
echo "---- NPM RUN MIGRATE"
echo ""
npm run migrate

# echo ""
# echo "---- NPM RUN SEED"
# echo ""
# npm run seed:undo:all
# npm run seed:all

echo ""
echo "---- NPM RUN START"
echo ""
npm run start
