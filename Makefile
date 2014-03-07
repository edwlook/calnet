TESTS = test/*.js
test:
	./node_modules/.bin/mocha --timeout 10000 --reporter nyan $(TESTS)

.PHONY: test
