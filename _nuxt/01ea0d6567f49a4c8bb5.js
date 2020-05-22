(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{494:function(e,t,r){"use strict";r.r(t);var o=r(104),n=r(352),c=r(335),d=r(349),m=r(353),h=r(351),f=r(354),l=r(355),$=r(365),y=r(356),C=r(359),v=r(358),k=r(363),w=r(367),_=r(366),D=r(357),N=r(360),A=r(362),T={components:{PositiveRateCard:r(361).a,ConfirmedCasesDetailsCard:f.a,TestedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:$.a,ConfirmedCasesAttributesCard:y.a,ConfirmedCasesByMunicipalitiesCard:C.a,TestedNumberCard:v.a,InspectionPersonsNumberCard:k.a,TelephoneAdvisoryReportsNumberCard:w.a,ConsultationDeskReportsNumberCard:_.a,MetroCard:D.a,AgencyCard:N.a,PositiveNumberByDiagnosedDateCard:A.a},data:function(){var title,e;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),e=o.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),e=o.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),e=o.patients.date;break;case"number-of-confirmed-cases-by-municipalities":title=this.$t("陽性患者数（区市町村別）"),e=d.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),e=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),e=o.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),e=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),e=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),e=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),e=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),e=c.date;break;case"positive-number-by-diagnosed-date":title=this.$t("陽性患者数（検査結果判明日別）"),e=m.date;break;case"positive-rate":title=this.$t("検査実施人数（陰性確認を除く）と陽性率の推移"),e=h.date}var data={title:title,updatedAt:e};return data},head:function(){var e="https://stopcovid19.metro.tokyo.lg.jp",t=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(e,"/ogp/").concat(this.$route.params.card,".png?t=").concat(t):"".concat(e,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(t),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:e+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},j=r(4),component=Object(j.a)(T,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",["details-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?t("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-number-card"):"number-of-confirmed-cases-by-municipalities"==this.$route.params.card?t("confirmed-cases-by-municipalities-card"):"attributes-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?t("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?t("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?t("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?t("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?t("metro-card"):"agency"==this.$route.params.card?t("agency-card"):"positive-number-by-diagnosed-date"==this.$route.params.card?t("positive-number-by-diagnosed-date-card"):"positive-rate"==this.$route.params.card?t("positive-rate-card"):this._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);