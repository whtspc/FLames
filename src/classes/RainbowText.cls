/**
 * Created by vissewo on 08/11/2024.
 */

public with sharing class RainbowText {
    @AuraEnabled public String rawtext {get; set;}
    @AuraEnabled public String rainbowtext {
        public get {
            List<String> colors = new List<String>{'red', 'orange', 'yellow', 'green', 'blue', 'magenta', 'violet'};
            String output = '';
            for (Integer i = 0; i < this.rawtext.length(); i++) {
                String currentChar = this.rawtext.substring(i, i+1);
                Integer colorIndex = Math.mod(i , colors.size());
                String color = colors[colorIndex];
                output += '<span style="color: ' + color + ';">' + currentChar + '</span>';
            }
            return output;
        }
        set;
    }
}