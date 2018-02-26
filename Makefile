.PHONY: default
default: run

.PHONY: install
install:
	npm install

.PHONY: run
run:
	npm start

.PHONY: build
build:
	NODE_ENV=production npm run build

.PHONY: test
test:
	npm test
