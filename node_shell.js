const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'624bc955-19ec-4ea8-9d4a-ddd2bd7a4199'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
