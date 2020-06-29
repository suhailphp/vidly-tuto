import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  let startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value(); //lodash function to get array from start to end
}

//this function is only doing slice the array from start point and take only number of count and return
