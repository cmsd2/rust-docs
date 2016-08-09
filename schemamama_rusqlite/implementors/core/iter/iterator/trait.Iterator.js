(function() {var implementors = {};
implementors["libc"] = [];implementors["rusqlite"] = ["impl&lt;'stmt,&nbsp;T,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='rusqlite/struct.MappedRows.html' title='rusqlite::MappedRows'>MappedRows</a>&lt;'stmt,&nbsp;F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;<a class='struct' href='rusqlite/struct.Row.html' title='rusqlite::Row'>Row</a>) -&gt; T</span>","impl&lt;'stmt,&nbsp;T,&nbsp;E,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='rusqlite/struct.AndThenRows.html' title='rusqlite::AndThenRows'>AndThenRows</a>&lt;'stmt,&nbsp;F&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='rusqlite/enum.Error.html' title='rusqlite::Error'>Error</a>&gt;, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(&amp;<a class='struct' href='rusqlite/struct.Row.html' title='rusqlite::Row'>Row</a>) -&gt; <a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;T,&nbsp;E&gt;</span>","impl&lt;'stmt&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='rusqlite/struct.Rows.html' title='rusqlite::Rows'>Rows</a>&lt;'stmt&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
