.PHONY: install start publish help # If you don't set this up, the system will prioritize matching files with these names, instead of our custom commands.

install:
	npm install

start:
	num run start

clean:
	rm -rf dist
	rm -rf publish

publish:
	npm run build && npm run deploy

help:
	@echo "   	"
	@echo "    install"
	@echo "        Install all dependencies"
	@echo "    start"
	@echo "        Start this application"
	@echo "    clean"
	@echo "        Clean all build files"
	@echo "    publish"
	@echo "        Build this application and publish it to any where with 'npm run deploy' command"
