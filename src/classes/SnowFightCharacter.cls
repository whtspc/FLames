/**
 * Created by vissewo on 11/11/2024.
 */

public with sharing class SnowFightCharacter {
    @AuraEnabled public String name {get; set;}
    @AuraEnabled public Integer xpos {get; set;}
    @AuraEnabled public Integer ypos {get; set;}
    @AuraEnabled public Integer delay {get; set;}
    @AuraEnabled public String score {get; set;}
}