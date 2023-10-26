const camelToTitleCase = (str: string) =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, function (s) {
    return s.toUpperCase();
  });

export default camelToTitleCase;
