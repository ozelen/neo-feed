# Neo Feed

## Contains

- [x] [Typescript](https://www.typescriptlang.org/) 2.5
- [x] [React](https://facebook.github.io/react/) 16.0
- [x] [Redux](https://github.com/reactjs/redux) 3.7
- [x] [React Router](https://github.com/ReactTraining/react-router) 4.2
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Redux Observable](https://github.com/redux-observable/redux-observable)
- [x] [RxJS](http://reactivex.io/rxjs/)

### Build tools

## Setup

```
$ make install
```

## Running

```
$ make run
```

## Build

```
$ make build
```

## Test

```
$ make test
```

# Task Requirements

-	use React, Redux, webpack
- 	use best practices to structure the application, consider that it will be extended with additional features in the future
-	provide means for configuration for different environments (DEV/PROD)
-	cover partially with unit tests (in order to demonstrate the approaches, if have experience)
-	use api.nasa.gov
-	the API-KEY is SPboJP8XCDF9nlUzSqcqzh0Mq9sJuy6Hf27FuTFl (if expired - please register)
-	documentation: 

https://api.nasa.gov/api.html#NeoWS


Task:
Create a single page React application with information about near orbital objects (NEO), organized in list with a maximum of 6 elements. New element should be added every 5 seconds and contain aggregated data about a single day. The oldest element should be removed on new element if list is full. You should start fetching data from 1st day of the month till today. When reach today, start from the 1st day again.

Every element should contain the following data:
-	max estimated diameter of NEO in kilometers for the day (check estimated_diameter_max property)
-	number of potentially hazardous NEOs per day (check is_potentially_hazardous_asteroid property)
-	closest NEO (miss_distance in km)
-	fastest NEO (relative_velocity in kph)

Elements with the 2 highest numbers of hazard objects should have red background and updated with each new element added.




# License

MIT
