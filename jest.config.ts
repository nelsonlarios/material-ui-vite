// jest.config.ts

export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	//moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		// process `*.tsx` files with `ts-jest`
	},
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/src/MockServer/setupEnv.ts'],
}
