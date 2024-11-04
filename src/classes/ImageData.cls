/**
 * Created by vissewo on 03/11/2024.
 */

public class ImageData {
    @AuraEnabled public String src { get; set; }
    @AuraEnabled public Integer x { get; set; }
    @AuraEnabled public Integer y { get; set; }
    @AuraEnabled public String id { get; set; }
    @AuraEnabled public String style {
        get {
            return 'position: absolute; left:'+this.x+'px; top:'+ this.y + 'px;';
        }
        public set;
    }

    public ImageData() {
        this.src = src;
        this.x = x;
        this.y = y;
        this.id = id;
        this.style = style;
    }
}
