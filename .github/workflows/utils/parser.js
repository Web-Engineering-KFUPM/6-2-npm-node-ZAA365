import _ from "lodash"

        export function parseNumbers(input) {
            return{result: _.compact(_.map(input,(str)=>Number(str)))}
          }

          export function isValidOperation(operation) {
            return {result: _.includes(["add","subtract","multiply","divide"],operation)}
          }