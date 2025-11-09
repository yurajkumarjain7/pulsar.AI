/* TOPIC: MICHAEL JACKSON - KING OF POP
  NOTE: 'Ask' variable should be set to a question to check the answer.
*/

Ask = prompt ("Enter a question number (1-10) about Michael Jackson:") 
que1 = "Who first called Michael Jackson the 'King of Pop'?"
que2 = "What is the name of Michael Jackson's best-selling album?"
que3 = "In what year did Michael Jackson pass away?"
que4 = "What was the name of his famous pet chimpanzee?"
que5 = "In which city was Michael Jackson born?"
que6 = "What iconic dance move did he popularize in 1983?"
que7 = "What was the name of his autobiography, released in 1988?"
que8 = "What was the name of Michael Jackson's band before his solo career?"
que9 = "How many solo number-one hits did he have on the Billboard Hot 100?"
que10 = "What song features the lyrics 'Something evil's lurking in the dark'?"

// The 'if' block checks the user's input and provides the answer in an alert.

if(Ask === '1'){
  alert ("Answer: Michael Jackson's friend, actress Elizabeth Taylor, first referred to him as the 'King of Pop'.")
} else if (Ask === '2'){
  alert ("Answer: 'Thriller' (1982) is his best-selling album of all time.")
} else if (Ask === '3'){
  alert ("Answer: Michael Jackson passed away in 2009.")
} else if (Ask === '4'){
  alert ("Answer: The name of his pet chimpanzee was Bubbles.")
} else if (Ask === '5'){
  alert ("Answer: He was born in Gary, Indiana, on August 29, 1958.")
} else if (Ask === '6'){
  alert ("Answer: The Moonwalk (first performed on the 'Motown 25' special).")
} else if (Ask === '7'){
  alert ("Answer: His autobiography was titled 'Moonwalk'.")
} else if (Ask === '8'){
  alert ("Answer: He started his career as the lead singer of The Jackson 5.")
} else if (Ask === '9'){
  alert ("Answer: Michael Jackson had 13 solo number-one hits.")
} else if (Ask === '10'){
  alert ("Answer: That lyric is from the song 'Thriller'.")
} else {
  alert ("Please enter a valid question number (1-10) to see the answer.")
}
