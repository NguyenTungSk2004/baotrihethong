for (let i = 4; i <= 90; i++) {
    document.write(`<div class="question correct">
   <h3>Question ${i}</h3>
   <p>Chân cắm trên main kết nối với case cho phép bật máy tính</p>
   <label><br>
   <input type="radio" name="q${i}" value="a">
   a. HDD Led.
   </label>
   <label><br>
   <input type="radio" name="q${i}" value="b" class="correct">
   b. PW SW.
   </label>
   <label><br>
   <input type="radio" name="q${i}" value="c">
   c. PW Led.
   </label>
   <label><br>
   <input type="radio" name="q${i}" value="d" >
   d. RES SW.
   </label>
   </div>`);
  }