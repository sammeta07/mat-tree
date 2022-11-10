import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string): any {
    var re = /\s*,\s*/;
    if (args && value) {
      let splitQuery = args.split(re);
      let numQueries = splitQuery.length;
      let returnedHighlighted: String = value;
      // console.log(`number of queries: ${numQueries}`)
      for (var i = 0; i < numQueries; i++) {
        // console.log(`${i}: ${splitQuery[i]}`)
        let startIndex = value
          .toUpperCase()
          .indexOf(splitQuery[i].toUpperCase());
        if (startIndex != -1) {
          let endLength = args.length;
          let matchingString = value.substr(startIndex, endLength);
          returnedHighlighted = returnedHighlighted.replace(
            matchingString,
            '<mark>' + matchingString + '</mark>'
          );
        }
      }
      return returnedHighlighted;
    }
    return value;
  }
}
