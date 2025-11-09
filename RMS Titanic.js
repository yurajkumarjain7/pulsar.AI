/* TOPIC: RMS TITANIC - TRIVIA
  NOTE: 'Ask' variable should be set to a question number to check the answer.
*/

Ask = prompt ("Enter a question number (1-20) about the Titanic:") 
que1 = "What was the Titanic's port of departure on its maiden voyage?"
que2 = "In what year did the Titanic sink?"
que3 = "Who was the Captain of the Titanic?"
que4 = "What was the name of the British company that owned the Titanic?"
que5 = "How many lifeboats did the Titanic carry?"
que6 = "On what date (day and month) did the Titanic hit the iceberg?"
que7 = "What was the Titanic's destination on its maiden voyage?"
que8 = "What was the total number of people who survived the sinking?"
que9 = "In which ocean did the Titanic sink?"
que10 = "What was the name of the ship that first reached the scene and rescued the survivors?"
que11 = "What was the name of the Titanic's sister ship that was also built?"
que12 = "Who was the chief designer of the Titanic?"
que13 = "Where was the Titanic built?"
que14 = "How long did it take for the Titanic to sink after hitting the iceberg?"
que15 = "What was the cost of the most expensive first-class ticket, in today's currency (approx)?"
que16 = "What was the common nickname for Captain Edward Smith, due to his popularity with wealthy passengers?"
que17 = "What was the age of the youngest passenger on the Titanic (who also became the last living survivor)?"
que18 = "How many funnels (smokestacks) did the Titanic have?"
que19 = "In what year was the wreck of the Titanic finally found on the ocean floor?"
que20 = "What iconic distress signal did the Titanic use (after using the traditional one)?"


// The 'if' block checks the user's input and provides the answer in an alert.

if(Ask === '1'){
  alert ("Answer: Southampton, England.")
} else if (Ask === '2'){
  alert ("Answer: 1912.")
} else if (Ask === '3'){
  alert ("Answer: Captain Edward John Smith.")
} else if (Ask === '4'){
  alert ("Answer: White Star Line.")
} else if (Ask === '5'){
  alert ("Answer: Twenty (20), which was more than the law required but far less than its capacity.")
} else if (Ask === '6'){
  alert ("Answer: April 14, 1912. It sank on April 15.")
} else if (Ask === '7'){
  alert ("Answer: New York City, USA.")
} else if (Ask === '8'){
  alert ("Answer: Approximately 706 people survived.")
} else if (Ask === '9'){
  alert ("Answer: The North Atlantic Ocean.")
} else if (Ask === '10'){
  alert ("Answer: The RMS Carpathia.")
} else if (Ask === '11'){
  alert ("Answer: The RMS Olympic (and the HMHS Britannic).")
} else if (Ask === '12'){
  alert ("Answer: Thomas Andrews.")
} else if (Ask === '13'){
  alert ("Answer: Belfast, Northern Ireland (at the Harland and Wolff shipyard).")
} else if (Ask === '14'){
  alert ("Answer: About 2 hours and 40 minutes (from impact to sinking).")
} else if (Ask === '15'){
  alert ("Answer: Over $100,000 in today's currency.")
} else if (Ask === '16'){
  alert ("Answer: The 'Millionaire's Captain'.")
} else if (Ask === '17'){
  alert ("Answer: Nine weeks old (Millvina Dean).")
} else if (Ask === '18'){
  alert ("Answer: Four, though only three were functional smokestacks; the fourth was for ventilation.")
} else if (Ask === '19'){
  alert ("Answer: 1985 (discovered by a joint French-American expedition led by Robert Ballard).")
} else if (Ask === '20'){
  alert ("Answer: SOS (after initially using the traditional CQD).")
} else {
  alert ("Please enter a valid question number (1-20) to see the answer.")
}
gt