const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'8ac7a6d0-6c72-4914-b9d3-fd1fe94ecfa1'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
