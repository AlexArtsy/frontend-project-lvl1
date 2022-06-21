#Makefile

install: # коммент
	npm ci

brain-games: #коммент
	node bin/brain-games.js

publish: #комманда опубликует? файл
	npm publish --dry-run
