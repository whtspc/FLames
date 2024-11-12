/**
 * Created by vissewo on 11/11/2024.
 */

public with sharing class SnowFightCharacter {
    @AuraEnabled public String id {get; set;}
    @AuraEnabled public String name {get; set;}
    @AuraEnabled public Integer xpos {get; set;}
    @AuraEnabled public Integer ypos {get; set;}
    @AuraEnabled public Integer delay {get; set;}

    @InvocableMethod(label='Generate Snow Fight Characters' description='Generates a collection of SnowFightCharacters from JSON array.')
    public static List<SnowFightCharacter> generateCharactersFromJson(List<String> jsonInput) {
        List<SnowFightCharacter> characters = new List<SnowFightCharacter>();
        String jsonString = jsonInput[0];
        characters = (List<SnowFightCharacter>) JSON.deserialize(jsonString, List<SnowFightCharacter>.class);
        return characters;
    }
}