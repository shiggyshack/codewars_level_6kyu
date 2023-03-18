//This function will take a string, and for every occurence of a vowel, will replace that vowel with a corresponding digit (still store as a string value).
function encode(string) {
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[i]==='a'){
      string[i] = '1';
    }else if(string[i]==='e'){
      string[i] = '2';
    }else if(string[i]==='i'){
      string[i] = '3';
    }else if(string[i]==='o'){
      string[i] = '4';
    }else if(string[i]==='u'){
      string[i] = '5';
    }else{
      string[i] = string[i]
    }
  }
  return string.join('');
}


//This function will return the string, with numbers instead of vowels, to its original form.
function decode(string) {
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[i]==='1'){
      string[i] = 'a';
    }else if(string[i]==='2'){
      string[i] = 'e';
    }else if(string[i]==='3'){
      string[i] = 'i';
    }else if(string[i]==='4'){
      string[i] = 'o';
    }else if(string[i]==='5'){
      string[i] = 'u';
    }else{
      string[i] = string[i]
    }
  }
  return string.join('');
}
