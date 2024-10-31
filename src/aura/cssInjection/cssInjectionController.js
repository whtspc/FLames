/**
 * Created by vissewo on 31/10/2024.
 */

({
    injectCSS: function (component, event, helper) {
        // Get the CSS code from the attribute
        var cssCode = component.get("v.cssCode");

        if (cssCode) {
            // Create a <style> element to hold the CSS
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            styleElement.innerHTML = cssCode;

            // Append the style element to the document head
            document.head.appendChild(styleElement);
        }
    }
})
