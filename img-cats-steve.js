let css = document.createElement('style');
css.setAttribute('type', 'text/css');

let rules = `
/*
* CSS Style Overwrites for:
* intermediagroup.catsone.com
* Steve Edition
* Version 2019.06.27.1219
*/

/* Panel - Job Description */
.form-columns > div > div:nth-child(6) {
    width: 1095px;
    z-index: 900;
	box-shadow: 0px 0px 8px 0px black;
}
/* -- shrink back down when collapsed */
.form-columns > div > div:nth-child(6).card-collapsed {
	width: unset !important;
	box-shadow: unset;
}

/* = = Global Properties = = */
/* -- Field Highlights Colors */
.datagrid-filters, .datagrid-search.filtered, button.enhanced-select-btn.filtered {
  background:#a17fc5;
}
.datagrid-search.filtered, button.enhanced-select-btn.filtered {
  color:white;
}
.checked.filtered:hover, .datagrid-search.filtered:hover, a.btn.filtered:hover, button.enhanced-select-btn.active.filtered:hover, button.enhanced-select-btn.filtered:hover, select.filtered:hover {
    background-color: #654591;
}
/* -- ALL Fields Format */
.field-text, .field-label {
    padding: 0 !important;
}
.field-row {
    min-height:0 !important;
}
.field-label {
    font-weight: 800;
}
/* -- Important Fields Format */
li[data-field-id="companyJobID"] > div > div.field-text
,li[data-field-id="extraField222152"] > div > div.field-text
,li[data-field-id="extraField185084"] > div > div.field-text
{
  font-size: 1.765em;
  font-weight: 800;
  padding: 4px !important;
  background: #f2f2f2;
}


/* = = Primary Panel = = */
/* -- Phone Number */
li[data-field-id="phoneNumbers"] > div > div > div > p {
    font-size: 2em;
}
/* = = Pipeline = = */
/* Rows */
td > div > span.tertiary-info {
    display: none;
}
.datagrid td>div {
    overflow: hidden;
    padding: 4px 0 0 0;
    margin-right: 0;
    height: 18px;
    line-height: 18px;
}
th#th-title {
    width: 600px !important;
}

/* -- Status Column */
th#th-status {
  width:50px !important;
}

/* = = Feed = = */

/* -- Re-order Items */
/* -- -- 1 - Set items to Flex */
div.feed-item-content > div {
    display: flex;
    flex-direction: column;
}

/* -- -- 2 - Set items to Flex */
/* -- Terciary Information */
span.tertiary-info {
    color: black;
}
`;

css.appendChild(document.createTextNode(rules));

document.querySelector('body').appendChild(css);

window.addEventListener('load', () => {
  let script = document.createElement('script');

  script.appendChild(
    document.createTextNode(`
let cards = Array.from(document.querySelectorAll('.card'));

cards.forEach(card => card.setAttribute('id', card.childNodes[2].innerText));
`)
  );
  document.querySelector('body').appendChild(script);
});
