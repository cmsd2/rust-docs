(function() {var implementors = {};
implementors['uuid'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='uuid/struct.Uuid.html' title='uuid::Uuid'>Uuid</a>",];implementors['toml'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='toml/enum.Value.html' title='toml::Value'>Value</a>",];implementors['url'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['num'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['chrono'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/offset/utc/struct.UTC.html' title='chrono::offset::utc::UTC'>UTC</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/offset/fixed/struct.FixedOffset.html' title='chrono::offset::fixed::FixedOffset'>FixedOffset</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/offset/local/struct.Local.html' title='chrono::offset::local::Local'>Local</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/naive/date/struct.NaiveDate.html' title='chrono::naive::date::NaiveDate'>NaiveDate</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/naive/time/struct.NaiveTime.html' title='chrono::naive::time::NaiveTime'>NaiveTime</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/naive/datetime/struct.NaiveDateTime.html' title='chrono::naive::datetime::NaiveDateTime'>NaiveDateTime</a>","impl&lt;Tz: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/date/struct.Date.html' title='chrono::date::Date'>Date</a>&lt;Tz&gt; <span class='where'>where Tz::Offset: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a></span>","impl&lt;Tz: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='chrono/offset/trait.TimeZone.html' title='chrono::offset::TimeZone'>TimeZone</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='chrono/datetime/struct.DateTime.html' title='chrono::datetime::DateTime'>DateTime</a>&lt;Tz&gt; <span class='where'>where Tz::Offset: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a></span>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='enum' href='chrono/enum.Weekday.html' title='chrono::Weekday'>Weekday</a>",];implementors['codelauf'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='codelauf/index/struct.CommitId.html' title='codelauf::index::CommitId'>CommitId</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='codelauf/index/struct.Signature.html' title='codelauf::index::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='codelauf/index/struct.Commit.html' title='codelauf::index::Commit'>Commit</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='codelauf/index/struct.IndexedFile.html' title='codelauf::index::IndexedFile'>IndexedFile</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
