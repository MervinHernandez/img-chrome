let css = document.createElement('style');
css.setAttribute('type', 'text/css');

let rules = `
/*
 * CSS Style Overwrites for:
 * intermediagroup.catsone.com
 * Version 2019.06.27.1215
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
/* Browser text highlight color */
::selection {
  background: #ad81ce; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #ad81ce; /* Gecko Browsers */
}
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
  line-height: 1.2em;
  font-weight: 800;
  padding: 4px !important;
  background: #f2f2f2;
}


/* = = Primary Panel = = */
/* -- Phone Number */
li[data-field-id="phoneNumbers"] > div > div > div > p {
    font-size: 2.5em;
}
/* = = Pipeline = = */
/* Rows */
.datagrid td>div {
    overflow: hidden;
    padding: 4px 0 0 0;
    margin-right: 0;
    height: 18px;
    line-height: 18px;
}

/* -- Status Column */
th#th-status {
  width:50px !important;
}

/* = = Feed = = */
/* -- Re order timestamp, and make it black */
div.feed-item-timestamp {
  /* bottom: 107px !important;
  right: 57px !important; */
}
div.feed-item-timestamp > span {
  color:black !important;
}


/* Hide Statuses */
.field-change-status-statuses > div:nth-child(1)
,.field-change-status-statuses > div:nth-child(2)
,.field-change-status-statuses > div:nth-child(4)
,.field-change-status-statuses > div:nth-child(6)
,.field-change-status-statuses > div:nth-child(7)
,.field-change-status-statuses > div:nth-child(12)
,.field-change-status-statuses > div:nth-child(13)
,.field-change-status-statuses > div:nth-child(14)
,.field-change-status-statuses > div:nth-child(15)
,.field-change-status-statuses > div:nth-child(16)
,.field-change-status-statuses > div:nth-child(17)
,.field-change-status-statuses > div:nth-child(19)
,.field-change-status-statuses > div:nth-child(20)
,.field-change-status-statuses > div:nth-child(21)
,.field-change-status-statuses > div:nth-child(22)
,.field-change-status-statuses > div:nth-child(30)
,.field-change-status-statuses > div:nth-child(32)
,.field-change-status-statuses > div:nth-child(37)
,.field-change-status-statuses > div:nth-child(38)
,.field-change-status-statuses > div:nth-child(39)
,.field-change-status-statuses > div:nth-child(40)
,.field-change-status-statuses > div:nth-child(41)
,.field-change-status-statuses > div:nth-child(42)
,.field-change-status-statuses > div:nth-child(43)
,.field-change-status-statuses > div:nth-child(44)
,.field-change-status-statuses > div:nth-child(45)
,.field-change-status-statuses > div:nth-child(46)
,.field-change-status-statuses > div:nth-child(47)
,.field-change-status-statuses > div:nth-child(48)
,.field-change-status-statuses > div:nth-child(49)
,.field-change-status-statuses > div:nth-child(50)

 {
  display:none;
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
