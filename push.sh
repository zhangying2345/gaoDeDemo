git add .
git cm -m 'update'
git push
expect "Username*"
send "zhangying2345\r"
expect "Password"
send "182838a?\r"