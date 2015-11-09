// โหลด package "gulp" มาใช้ (บรรทัดนี้ต้องใส่เสมอ)
var gulp = require("gulp");
 
// โหลด package "gulp-ruby-sass" มาใช้ (บรรทัดนี้ต้องใส่เวลาติดตั้ง plugin เสริม)
var sass = require("gulp-ruby-sass");
 
// สร้าง task ชื่อว่า "sass" ขึ้นมา พร้อมกับระบุงานที่จะให้ task นี้ทำ
gulp.task("sass", function () {
    // ให้คอมไพล์ .scss ทุกไฟล์ที่อยู่ในโฟลเดอร์ scss
    return sass(['scss/**/*.scss'], {
    		compass: true,
            style: 'compressed',
        })
    	.on('error', function(err){
    		console.log(err.message);
    	})
        .pipe(gulp.dest('css'));
});

gulp.task('default',['sass'], function() {
	gulp.watch("scss/**/*.scss",['sass']);
});

 