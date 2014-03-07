TESTS = test/*.js
test:
	./node_modules/.bin/mocha --reporter nyan $(TESTS)

.PHONY: test
