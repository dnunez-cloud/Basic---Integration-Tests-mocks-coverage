-To run the automation test, command should be: "npm run test-automation".

-To run the jest integral tests and unit mocked tests, the command should be:
 "npam run test-coverage".

-The file with the automation script is automation.js and is inside week13\test\specs
folder.

-The integration and mocked tests file, covers 98% of the lines complexOperations.
This is in line 65 the return "figure not supported" is not cover, because when the
figure is not supported the test failed in isSupportedFigure.

-All the integration test has below, his mocked unit test version.