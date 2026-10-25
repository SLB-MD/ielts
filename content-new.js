// ============================================================
//  content-new.js — LÁT CẮT NGƯỜI MỚI VIẾT LẠI CHO BẢN MỚI
//  Nạp SAU content.js. Chỉ ghi đè đúng các lát cắt dưới đây.
//  Mọi nội dung tự soạn 100%, tiếng Việt đơn giản, ví dụ trước.
//  Gỡ file này là về lại nội dung cũ.
// ============================================================

// ---------- 2. BỘ 20 TỪ LỚP HỌC (vocab set 24) — sửa B1-B4 ----------
(function () {
  if (typeof CONTENT === "undefined") return;
  var s = CONTENT.vocab[24];
  s.topic = "Từ vựng lớp học đầu tiên";
  s.theme = "Từ vựng lớp học đầu tiên - First Classroom Words";
  var fix = {
    "letter": { ipa: "/ˈletə/" },
    "answer": { ipa: "/ˈɑːnsə/" },
    "say": { ex: "Say hello to your teacher.", exv: "Hãy chào thầy cô giáo của bạn." },
    "listen": { ex: "Listen to your teacher, please.", exv: "Hãy nghe thầy cô giáo của bạn nhé." },
    "repeat": { ex: "Please repeat after me: hello.", exv: "Hãy nhắc lại theo tôi: hello." },
    "practice": { ex: "We practice English every day.", exv: "Chúng ta luyện tập tiếng Anh mỗi ngày." },
    "sound": { ex: "Listen! What sound is that?", exv: "Hãy nghe! Đó là âm gì?" }
  };
  s.cards.forEach(function (c) { if (fix[c.w]) Object.assign(c, fix[c.w]); });
})();

// ---------- 3. NHÃN CHƯƠNG BAND 0 (D2) + NHÃN NGHE (E) ----------
// E: các mục nghe chào hỏi Band 0 (listening #96, #97, #98) không còn mang nhãn "Section 1".
var RB_LISTEN_LABELS = { 96: "Nghe chậm: chào hỏi", 97: "Nghe chậm: chào hỏi", 98: "Nghe chậm: chào hỏi" };

// ---------- 4. BA TRẠM NGỮ PHÁP SIÊ NHỎ BAND 0 (D1) ----------
// Khuôn trạm: ví dụ trước — quy tắc sau — mẹo hình ảnh — khối Làm mẫu — 8 câu luyện có giải thích.
var RB_NEW_GRAMMAR = [
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Tôi là... (I am...)",
    hook: "Muốn giới thiệu mình, chỉ cần hai chữ: I am — rồi thêm tên, nghề, hoặc cảm xúc.",
    explain: "Nghe hai câu này trước: 'I am Nam.' (Tôi là Nam.) 'I am a student.' (Tôi là học sinh.) Quy tắc rất ngắn: I am + tên / nghề / tính từ. Chữ 'am' chỉ đi với 'I' — một mình 'I' dùng 'am', không dùng 'is' hay 'are'.",
    examples: ["I am Nam.", "I am a student.", "I am happy."],
    tip: "Hãy tưởng tượng chữ 'am' như cái bóng chỉ đi với 'I' — I và am luôn đi một cặp, không đi với ai khác.",
    model: "Cô giáo hỏi: Tell me about you. Bạn đáp: I am Nam. I am a student. I am happy today.",
    modelVi: "Cô giáo hỏi: Hãy kể về bạn. Bạn đáp: Tôi là Nam. Tôi là học sinh. Hôm nay tôi vui.",
    quiz: [
      { q: "___ Nam.", o: ["I am", "I is", "I are"], a: 0, why: "Chủ ngữ I luôn đi với am: I am Nam." },
      { q: "I ___ a teacher.", o: ["am", "is", "are"], a: 0, why: "I đi với am, không dùng is/are." },
      { q: "I ___ happy today.", o: ["am", "is", "are"], a: 0, why: "I am + tính từ: I am happy." },
      { q: "Chọn câu đúng:", o: ["I am Linh.", "I is Linh.", "I are Linh."], a: 0, why: "Chỉ có I am là đúng." },
      { q: "I ___ a student.", o: ["am", "is", "be"], a: 0, why: "I + am + nghề: I am a student." },
      { q: "___ Anna.", o: ["I am", "I be", "I is"], a: 0, why: "Giới thiệu tên: I am Anna." },
      { q: "I am ___. (điền nghề)", o: ["a doctor", "doctoring", "doctors"], a: 0, why: "Sau am là danh từ nghề có a: a doctor." },
      { q: "Câu nào sai?", o: ["I is happy.", "I am happy.", "I am a student."], a: 0, why: "I is là sai — I luôn đi với am." }
    ]
  },
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Đây là... (This is...)",
    hook: "Muốn chỉ một đồ vật hay một người, chỉ cần: This is — rồi thêm tên đồ vật.",
    explain: "Nghe hai câu này trước: 'This is a book.' (Đây là một quyển sách.) 'This is my friend, Anna.' (Đây là bạn tôi, Anna.) Quy tắc: This is + một đồ vật / một người ở gần mình. 'This' nghĩa là 'cái này / người này' — thứ ở gần, chỉ tay tới được.",
    examples: ["This is a book.", "This is my friend, Anna.", "This is my school."],
    tip: "Hãy tưởng tượng tay bạn đang chỉ vào đồ vật ở ngay trước mặt — thứ ở gần mới dùng This.",
    model: "Bạn chỉ quyển sách: This is a book. Bạn giới thiệu bạn mình: This is my friend, Anna.",
    modelVi: "Bạn chỉ quyển sách: Đây là một quyển sách. Bạn giới thiệu bạn mình: Đây là bạn tôi, Anna.",
    quiz: [
      { q: "___ a pen.", o: ["This is", "This are", "This be"], a: 0, why: "This is + đồ vật số ít." },
      { q: "This is ___ friend, Lan.", o: ["my", "me", "I"], a: 0, why: "my + người: my friend." },
      { q: "Muốn giới thiệu quyển sách, nói:", o: ["This is a book.", "This are a book.", "This is book."], a: 0, why: "This is + a + danh từ số ít." },
      { q: "This is a school. 'This' ở đây nghĩa là:", o: ["cái này", "cái kia ở xa", "những cái này"], a: 0, why: "This = cái này, thứ ở gần." },
      { q: "___ my school.", o: ["This is", "This are", "These is"], a: 0, why: "This is + nơi chốn số ít." },
      { q: "This is ___ apple.", o: ["an", "a", "the"], a: 0, why: "apple bắt đầu bằng nguyên âm nên dùng an." },
      { q: "Chọn câu đúng:", o: ["This is my teacher.", "This are my teacher.", "This is my teachers."], a: 0, why: "This is + my + danh từ số ít." },
      { q: "Câu nào sai?", o: ["This are a cat.", "This is a cat.", "This is my cat."], a: 0, why: "This luôn đi với is, không đi với are." }
    ]
  },
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Tôi tên là... (My name is...)",
    hook: "Câu đầu tiên khi làm quen: My name is — rồi thêm tên của bạn.",
    explain: "Nghe hai câu này trước: 'My name is Linh.' (Tôi tên là Linh.) 'My name is Nam. Nice to meet you!' (Tôi tên là Nam. Rất vui được gặp bạn!) Quy tắc: My name is + tên. 'My' nghĩa là 'của tôi' — my name = tên của tôi. Nói xong tên, thêm 'Nice to meet you!' cho lịch sự.",
    examples: ["My name is Linh.", "My name is Nam. Nice to meet you!", "Hello! My name is Anna."],
    tip: "Hãy tưởng tượng 'My name is' như một tấm bảng tên bạn đeo trước ngực — đọc lên là người ta biết tên bạn.",
    model: "A: Hello! What is your name? B: My name is Linh. Nice to meet you!",
    modelVi: "A: Xin chào! Bạn tên là gì? B: Tôi tên là Linh. Rất vui được gặp bạn!",
    quiz: [
      { q: "___ Linh.", o: ["My name is", "My name are", "My name be"], a: 0, why: "My name is + tên." },
      { q: "'My' trong 'My name' nghĩa là:", o: ["của tôi", "của bạn", "của anh ấy"], a: 0, why: "My = của tôi; my name = tên của tôi." },
      { q: "Sau khi nói tên, câu lịch sự nên nói thêm là:", o: ["Nice to meet you!", "Goodbye!", "Thank you!"], a: 0, why: "Nice to meet you = Rất vui được gặp bạn, dùng ngay khi làm quen." },
      { q: "Chọn câu đúng:", o: ["My name is Lan.", "My name are Lan.", "I name is Lan."], a: 0, why: "Chỉ có My name is là đúng." },
      { q: "Hello! ___ Anna.", o: ["My name is", "My name are", "I name"], a: 0, why: "Chào xong thì giới thiệu tên: My name is Anna." },
      { q: "A: What is your name? B: ___", o: ["My name is Nam.", "I name Nam.", "Name is Nam."], a: 0, why: "Trả lời tên: My name is Nam." },
      { q: "'Nice to meet you!' dùng khi nào?", o: ["Lần đầu gặp ai đó", "Khi chia tay", "Khi cảm ơn"], a: 0, why: "Dùng ngay khi làm quen, lần đầu gặp." },
      { q: "Câu nào sai?", o: ["My name are Linh.", "My name is Linh.", "Hello! My name is Linh."], a: 0, why: "My name đi với is, không đi với are." }
    ]
  }
];

// ---------- 5. BÀI KIỂM TRA CUỐI CHƯƠNG 1 (D3) ----------
// Không hỏi bằng ký hiệu IPA trần — hỏi bằng từ ví dụ. Hai phần, mỗi phần phải đạt từ 50% trở lên.
var RB_CH1_TEST = {
  title: "Bài kiểm tra cuối chương 1",
  parts: [{ name: "Âm và câu nói hàng ngày", idx: [0, 1, 3, 5, 7] }, { name: "Âm và chào hỏi", idx: [2, 4, 6] }],
  questions: [
    { q: "Từ nào có âm giống âm trong từ 'ship'?", o: ["fish", "sheep", "cat", "sun"], a: 0, why: "fish và ship đều có âm 'i' ngắn, nghe giống nhau; sheep có âm 'i' dài, nghe khác." },
    { q: "Bạn gặp một người bạn mới, câu nào đúng nhất để chào và giới thiệu tên?", o: ["Hello! My name is Linh.", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Gặp người mới: chào Hello rồi giới thiệu tên bằng My name is..." },
    { q: "Từ nào đọc giống âm trong 'see': sea hay cat?", o: ["sea", "cat", "dog", "sun"], a: 0, why: "sea đọc là /siː/, giống âm trong see; cat đọc là /kæt/, khác âm." },
    { q: "Bạn muốn nói 'Tôi là học sinh', câu nào đúng?", o: ["I am a student.", "I is a student.", "I are a student.", "I be a student."], a: 0, why: "I luôn đi với am: I am a student." },
    { q: "Khi gặp người mới, câu chào nào đúng nhất?", o: ["Hello! My name is...", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Gặp người mới: chào Hello rồi giới thiệu tên." },
    { q: "Từ nào có âm giống âm trong từ 'book'?", o: ["good", "food", "cat", "sun"], a: 0, why: "good và book đều có âm 'u' ngắn, nghe giống nhau; food có âm 'u' dài, nghe khác." },
    { q: "'Thank you' nghĩa là gì?", o: ["Cảm ơn bạn", "Xin chào", "Tạm biệt", "Xin lỗi"], a: 0, why: "'Thank you' nghĩa là 'Cảm ơn bạn' — câu nói lịch sự dùng rất nhiều mỗi ngày." },
    { q: "Sau khi giới thiệu tên, câu lịch sự nên nói thêm là gì?", o: ["Nice to meet you!", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Nice to meet you! nghĩa là 'Rất vui được gặp bạn', nói ngay khi làm quen." }
  ]
};

// ---------- 7. PHÁT ÂM: BẢNG 44 ÂM THEO PHÂN LOẠI MỚI + ĐỢT 1 ----------
// Phân loại MỚI sau kiểm chứng: ə = hay lệch, ʃ = khó, ʌ giữ hay lệch (đợt 2).
// Thành phần: quen 23, hay lệch 15, khó 6 = 44. Đợt = đúng phân loại (đợt 1 = quen, đợt 2 = hay lệch, đợt 3 = khó).
var RB_PH_DIFF_NEW = {
  quen: ["i:", "e", "ɑ:", "ɔ:", "u:", "eɪ", "aɪ", "aʊ", "ɔɪ", "m", "n", "ŋ", "p", "b", "t", "d", "k", "ɡ", "f", "s", "h", "l", "j"],
  lech: ["ɪ", "ʊ", "ʌ", "ɒ", "ɪə", "eə", "ʊə", "əʊ", "ə", "v", "z", "tʃ", "dʒ", "r", "w"],
  kho: ["æ", "ɜ:", "θ", "ð", "ʒ", "ʃ"]
};
var RB_PH_WAVES = {
  1: ["m", "n", "p", "b", "f", "s", "h", "l", "t", "d", "k", "ɡ", "ŋ", "j", "i:", "e", "ɑ:", "ɔ:", "u:", "eɪ", "aɪ", "aʊ", "ɔɪ"],
  2: ["ɪ", "ʊ", "ʌ", "ɒ", "ɪə", "eə", "ʊə", "əʊ", "ə", "v", "z", "tʃ", "dʒ", "r", "w"],
  3: ["æ", "ɜ:", "θ", "ð", "ʒ", "ʃ"]
};
// Dữ liệu đợt 1: ký hiệu, từ ví dụ, nghĩa, lời giải thích bằng lời thường, câu mẫu,
// mốc đoạn video BBC (PH_SEG, gắn theo ký hiệu âm) và tham số khẩu hình cũ (hình vẽ đã bỏ, chỉ giữ để đối chiếu).
// Lời giải thích f/j/k/ɡ/ŋ là bản viết lại đã kiểm chứng; các âm còn lại giữ lời giải thích cũ đã tốt.
var RB_PH1 = [
  { s: "m", w: "man", vi: "người đàn ông", ex: "Hai môi mím lại, hơi đi qua mũi, có rung. Giống âm m tiếng Việt.", sen: "The man is my father.", senVi: "Người đàn ông đó là bố tôi.", seg: [3506, 3625], h: .4, f: .5, r: 0, o: .05, tip: .1, teeth: 0 },
  { s: "n", w: "no", vi: "không", ex: "Đầu lưỡi chạm nướu trên, hơi đi qua mũi. Giống âm n tiếng Việt.", sen: "No, thank you.", senVi: "Không, cảm ơn bạn.", seg: [3625, 3750], h: .5, f: .8, r: 0, o: .2, tip: .85, teeth: 1 },
  { s: "p", w: "pen", vi: "cái bút", ex: "Hai môi mím chặt rồi bật mở đẩy hơi ra. Âm không rung dây thanh.", sen: "This is my pen.", senVi: "Đây là bút của tôi.", seg: [1723, 1860], h: .4, f: .5, r: 0, o: .1, tip: .1, teeth: 0 },
  { s: "b", w: "bag", vi: "cái túi", ex: "Giống âm p nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "My bag is red.", senVi: "Túi của tôi màu đỏ.", seg: [1860, 1994], h: .4, f: .5, r: 0, o: .1, tip: .1, teeth: 0 },
  { s: "f", w: "fish", vi: "con cá", ex: "Tiếng Việt đã có âm này: chữ 'ph' trong 'phở' chính là /f/. Răng trên chạm nhẹ vào môi dưới, thổi hơi qua khe hẹp. Chỉ cần chú ý bật rõ âm cuối trong tiếng Anh (ví dụ 'life' phải nghe rõ /f/ cuối từ — tiếng Việt thường nuốt âm cuối).", sen: "I like fish.", senVi: "Tôi thích cá.", seg: [2684, 2780], h: .4, f: .7, r: 0, o: .15, tip: .3, teeth: 1 },
  { s: "s", w: "see", vi: "nhìn thấy", ex: "Đầu lưỡi gần nướu trên, hai hàm răng gần khép, thổi hơi xì dài và mảnh.", sen: "I see a cat.", senVi: "Tôi nhìn thấy một con mèo.", seg: [3113, 3209], h: .6, f: .8, r: 0, o: .15, tip: .7, teeth: 1 },
  { s: "h", w: "hat", vi: "cái mũ", ex: "Miệng mở theo hình của nguyên âm sau nó, đẩy hơi từ cổ họng ra nhẹ nhàng như thở dài.", sen: "This is my hat.", senVi: "Đây là mũ của tôi.", seg: [3879, 3945], h: .4, f: .5, r: 0, o: .5, tip: .1, teeth: 0 },
  { s: "l", w: "leg", vi: "cái chân", ex: "Đầu lưỡi chạm nướu trên, hơi đi qua hai bên lưỡi. Giống âm l tiếng Việt khi ở đầu từ.", sen: "I have two legs.", senVi: "Tôi có hai chân.", seg: [3945, 4160], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "t", w: "ten", vi: "số mười", ex: "Đầu lưỡi chạm vào nướu sau răng trên rồi bật ra kèm hơi mạnh.", sen: "I am ten years old.", senVi: "Tôi mười tuổi.", seg: [1994, 2124], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "d", w: "dog", vi: "con chó", ex: "Giống âm t nhưng có rung cổ họng.", sen: "The dog is big.", senVi: "Con chó to.", seg: [2124, 2249], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "k", w: "key", vi: "chìa khóa", ex: "Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi rồi bật ra. Miệng mở vừa.", sen: "This is a key.", senVi: "Đây là một chiếc chìa khóa.", seg: [2459, 2579], h: .45, f: .15, r: 0, o: .4, tip: 0, teeth: 0 },
  { s: "ɡ", w: "go", vi: "đi", ex: "Giống âm k nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung. Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi rồi bật ra.", sen: "I go to school.", senVi: "Tôi đi học.", seg: [2579, 2684], h: .45, f: .15, r: 0, o: .4, tip: 0, teeth: 0 },
  { s: "ŋ", w: "sing", vi: "hát", ex: "Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi, hơi đi qua mũi. Là âm ng ở cuối từ, đừng thêm g phía sau.", sen: "I sing a song.", senVi: "Tôi hát một bài hát.", seg: [3750, 3879], h: .45, f: .15, r: 0, o: .3, tip: 0, teeth: 0 },
  { s: "j", w: "yes", vi: "vâng", ex: "Gần giống âm 'i' đọc thật nhanh rồi trượt sang âm sau. Lưỡi nâng cao ra trước rồi trượt nhanh sang nguyên âm sau.", sen: "Yes, I am ready.", senVi: "Vâng, tôi sẵn sàng.", seg: [4490, null], h: .85, f: .9, r: 0, o: .25, tip: .25, teeth: 0 },
  { s: "i:", w: "see", vi: "nhìn thấy", ex: "Môi dẹt và kéo sang hai bên như đang cười. Lưỡi cao và đưa ra trước, đầu lưỡi chạm nhẹ răng dưới.", sen: "I see a bird.", senVi: "Tôi nhìn thấy một con chim.", seg: [0, 131], h: .95, f: .95, r: 0, o: .18, tip: .3, teeth: 0 },
  { s: "e", w: "bed", vi: "cái giường", ex: "Miệng mở vừa, môi thả lỏng. Lưỡi ở giữa, đầu lưỡi chạm răng dưới. Âm ngắn.", sen: "The bed is soft.", senVi: "Chiếc giường mềm.", seg: [345, 455], h: .55, f: .8, r: 0, o: .45, tip: .25, teeth: 0 },
  { s: "ɑ:", w: "car", vi: "xe hơi", ex: "Miệng mở to, lưỡi thấp và lùi hẳn về sau. Âm dài, nghe như tiếng a kéo dài từ cổ họng.", sen: "My father has a car.", senVi: "Bố tôi có một chiếc xe hơi.", seg: [957, 996], h: .1, f: .1, r: 0, o: .9, tip: 0, teeth: 0 },
  { s: "ɔ:", w: "horse", vi: "con ngựa", ex: "Âm dài hơn ɒ. Môi tròn vừa, lưỡi lùi về sau và hơi nâng lên. Âm dài.", sen: "The horse is white.", senVi: "Con ngựa màu trắng.", seg: [750, 800], h: .4, f: .15, r: .55, o: .5, tip: 0, teeth: 0 },
  { s: "u:", w: "food", vi: "thức ăn", ex: "Môi tròn và chu mạnh ra trước như thổi nến. Lưỡi cao và lùi hẳn về sau. Âm dài.", sen: "I like this food.", senVi: "Tôi thích món ăn này.", seg: [292, 345], h: .92, f: .08, r: 1, o: .22, tip: 0, teeth: 0 },
  { s: "eɪ", w: "day", vi: "ngày", ex: "Bắt đầu như âm e rồi trượt nhẹ lên âm ɪ. Môi hơi dẹt dần khi trượt.", sen: "Today is a good day.", senVi: "Hôm nay là một ngày đẹp.", seg: [1103, 1205], h: .6, f: .85, r: 0, o: .4, tip: .25, teeth: 0 },
  { s: "aɪ", w: "night", vi: "ban đêm", ex: "Bắt đầu như âm a (miệng mở to) rồi trượt lên âm ɪ (miệng khép và dẹt lại).", sen: "Good night!", senVi: "Chúc ngủ ngon!", seg: [1526, 1586], h: .3, f: .6, r: 0, o: .7, tip: .2, teeth: 0 },
  { s: "aʊ", w: "now", vi: "bây giờ", ex: "Bắt đầu như âm a rồi trượt về âm ʊ, môi tròn lại và miệng khép dần.", sen: "I am ready now.", senVi: "Bây giờ tôi đã sẵn sàng.", seg: [1586, 1723], h: .35, f: .35, r: .5, o: .65, tip: .05, teeth: 0 },
  { s: "ɔɪ", w: "boy", vi: "cậu bé", ex: "Bắt đầu như âm ɔ (môi hơi tròn) rồi trượt lên âm ɪ (môi dẹt ra).", sen: "The boy is happy.", senVi: "Cậu bé vui vẻ.", seg: [1259, 1313], h: .45, f: .5, r: .3, o: .5, tip: .1, teeth: 0 }
];
// ---------- 11b. GIAI ĐOẠN 1.6: BÀI HỌC ĐỦ 44 ÂM (đợt 2/3, dữ kiện cũ) ----------
// ex lấy từ mô tả khẩu hình của web cũ, đã chuẩn hóa: không nói "giống" khi chỉ
// gần giống (trừ cặp rung/không rung cùng cách đặt miệng, ghi rõ "cách đặt miệng
// giống"); ʌ/ə/ʃ dùng đúng bản đã kiểm chứng trong RB_PH_EXPLAIN_LATER.
var RB_PH2 = [
  { s: "ɪ", w: "ship", vi: "con tàu", ex: "Giống âm i: nhưng ngắn và thả lỏng hơn. Miệng mở hơi rộng hơn một chút, lưỡi thấp hơn một chút.", sen: "The ship is big.", senVi: "Con tàu lớn.", seg: [131, 251], h: .8, f: .85, r: 0, o: .3, tip: .25, teeth: 0 },
  { s: "ʊ", w: "book", vi: "quyển sách", ex: "Môi tròn nhẹ và hơi chu ra, lưỡi lùi về sau, ở giữa cao. Âm ngắn và thả lỏng.", sen: "This is my book.", senVi: "Đây là quyển sách của tôi.", seg: [251, 292], h: .65, f: .2, r: .6, o: .3, tip: 0, teeth: 0 },
  { s: "ʌ", w: "cup", vi: "cái cốc", ex: "Âm này tiếng Việt không có; nghe gần giống âm 'ă' nhưng miệng mở khác và lưỡi đặt khác — nghe nút loa mới là chuẩn, chữ 'ă' chỉ là điểm tựa ban đầu. Miệng mở vừa, môi thả lỏng, lưỡi ở giữa và hơi lùi, âm ngắn.", sen: "My cup is red.", senVi: "Cái cốc của tôi màu đỏ.", seg: [846, 957], h: .35, f: .4, r: 0, o: .55, tip: .15, teeth: 0 },
  { s: "ɒ", w: "hot", vi: "nóng", ex: "Môi hơi tròn nhẹ, miệng mở rộng, lưỡi thấp và lùi về sau. Âm ngắn.", sen: "It is hot today.", senVi: "Hôm nay trời nóng.", seg: [996, 1036], h: .12, f: .15, r: .35, o: .75, tip: 0, teeth: 0 },
  { s: "ɪə", w: "here", vi: "ở đây", ex: "Bắt đầu như âm ɪ rồi trượt nhẹ về âm ə ở giữa miệng. Lưỡi hạ dần.", sen: "Come here, please.", senVi: "Đến đây nào.", seg: [1036, 1103], h: .65, f: .6, r: 0, o: .35, tip: .15, teeth: 0 },
  { s: "eə", w: "hair", vi: "tóc", ex: "Bắt đầu như âm e rồi trượt về âm ə. Miệng mở dần một chút.", sen: "Her hair is long.", senVi: "Tóc của cô ấy dài.", seg: [1423, 1526], h: .5, f: .6, r: 0, o: .45, tip: .15, teeth: 0 },
  { s: "ʊə", w: "sure", vi: "chắc chắn", ex: "Bắt đầu như âm ʊ (môi hơi tròn) rồi trượt về âm ə, môi thả lỏng dần.", sen: "I am sure.", senVi: "Tôi chắc chắn.", seg: [1205, 1259], h: .6, f: .35, r: .3, o: .35, tip: .05, teeth: 0 },
  { s: "əʊ", w: "go", vi: "đi", ex: "Bắt đầu ở giữa miệng rồi trượt về sau, môi tròn dần lên như âm ʊ.", sen: "Let's go home.", senVi: "Đi về nhà thôi.", seg: [1313, 1423], h: .6, f: .3, r: .5, o: .35, tip: .05, teeth: 0 },
  { s: "ə", w: "about", vi: "về", ex: "Âm chỉ xuất hiện ở vần đọc lướt, không nhấn mạnh — khác với âm ơ đầy đủ của tiếng Việt. Miệng gần như thả lỏng hoàn toàn, lưỡi ở giữa. Ví dụ âm đầu của 'about' đọc lướt, không đọc rõ thành 'ơ-bao'.", sen: "Tell me about you.", senVi: "Kể cho tôi nghe về bạn.", seg: [455, 696], h: .5, f: .5, r: 0, o: .35, tip: .1, teeth: 0 },
  { s: "v", w: "van", vi: "xe tải nhỏ", ex: "Cách đặt miệng giống âm f, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "The van is blue.", senVi: "Chiếc xe tải nhỏ màu xanh dương.", seg: [2780, 2970], h: .4, f: .7, r: 0, o: .15, tip: .3, teeth: 1 },
  { s: "z", w: "zoo", vi: "sở thú", ex: "Cách đặt miệng giống âm s, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "We go to the zoo.", senVi: "Chúng tôi đi sở thú.", seg: [3209, 3305], h: .6, f: .8, r: 0, o: .15, tip: .7, teeth: 1 },
  { s: "tʃ", w: "chair", vi: "cái ghế", ex: "Đầu lưỡi chạm nướu trên như âm t rồi thả hơi xì ra như âm ʃ nối tiếp, môi hơi chu.", sen: "This chair is new.", senVi: "Chiếc ghế này mới.", seg: [2249, 2354], h: .55, f: .7, r: .35, o: .3, tip: .8, teeth: 1 },
  { s: "dʒ", w: "job", vi: "công việc", ex: "Cách đặt miệng giống âm tʃ, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "I like my job.", senVi: "Tôi thích công việc của tôi.", seg: [2354, 2459], h: .55, f: .7, r: .35, o: .3, tip: .8, teeth: 1 },
  { s: "r", w: "red", vi: "màu đỏ", ex: "Đầu lưỡi cong lên và lùi vào giữa, không chạm vào đâu cả, môi hơi tròn. Không rung lưỡi và không đọc như chữ r giọng Hà Nội (âm /z/).", sen: "The pen is red.", senVi: "Cây bút màu đỏ.", seg: [4160, 4367], h: .55, f: .55, r: .4, o: .3, tip: .5, teeth: 0 },
  { s: "w", w: "water", vi: "nước", ex: "Môi tròn và chu mạnh như âm u: rồi mở nhanh sang nguyên âm sau. Bắt đầu bằng môi, không phải răng.", sen: "I drink water.", senVi: "Tôi uống nước.", seg: [4367, 4490], h: .7, f: .2, r: .9, o: .25, tip: 0, teeth: 0 },
  { s: "æ", w: "cat", vi: "con mèo", ex: "Miệng mở khá rộng, hàm hạ xuống. Lưỡi thấp và ra trước. Đây là âm giữa a và e.", sen: "The cat is black.", senVi: "Con mèo màu đen.", seg: [800, 846], h: .25, f: .85, r: 0, o: .8, tip: .2, teeth: 0 },
  { s: "ɜ:", w: "bird", vi: "con chim", ex: "Môi thả lỏng, lưỡi ở giữa miệng không chạm đâu cả. Âm dài, nghe như ơ kéo dài.", sen: "The bird can sing.", senVi: "Con chim biết hót.", seg: [696, 750], h: .55, f: .5, r: .1, o: .4, tip: .1, teeth: 0 },
  { s: "θ", w: "think", vi: "nghĩ", ex: "Đầu lưỡi đặt giữa hai hàm răng, thò ra một chút, thổi hơi qua. Người Việt hay đọc thành âm 'th' kiểu tiếng Việt hoặc âm t.", sen: "I think so.", senVi: "Tôi nghĩ vậy.", seg: [2970, 3041], h: .4, f: .95, r: 0, o: .2, tip: 1, teeth: 1 },
  { s: "ð", w: "this", vi: "cái này", ex: "Cách đặt miệng giống âm θ (lưỡi giữa hai răng), nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "This pen is mine.", senVi: "Cây bút này là của tôi.", seg: [3041, 3113], h: .4, f: .95, r: 0, o: .2, tip: 1, teeth: 1 },
  { s: "ʒ", w: "television", vi: "ti vi", ex: "Cách đặt miệng giống âm ʃ, nhưng có rung cổ họng. Âm này ít gặp, hay ở giữa từ.", sen: "I watch television.", senVi: "Tôi xem ti vi.", seg: [3462, 3506], h: .6, f: .6, r: .45, o: .25, tip: .55, teeth: 0 },
  { s: "ʃ", w: "she", vi: "cô ấy", ex: "Âm này tiếng Việt chuẩn không có; người miền Nam nghe chữ 's' của mình gần giống âm này, nhưng để đọc đúng 'she' thì lưỡi phải đặt sau lợi trên và thổi hẹp hơn. Lưỡi nâng ở giữa, môi hơi chu ra, thổi hơi xì tròn và mềm hơn âm s.", sen: "She is my friend.", senVi: "Cô ấy là bạn của tôi.", seg: [3305, 3462], h: .6, f: .6, r: .45, o: .25, tip: .55, teeth: 0 }
];
// Lời giải thích đã kiểm chứng cho các âm đợt 2/3 (nay đã đưa vào trường ex của RB_PH2; giữ lại để đối chiếu).
var RB_PH_EXPLAIN_LATER = {
  "ʌ": "Âm này tiếng Việt không có; nghe gần giống âm 'ă' nhưng miệng mở khác và lưỡi đặt khác — nghe nút loa mới là chuẩn, chữ 'ă' chỉ là điểm tựa ban đầu. Miệng mở vừa, môi thả lỏng, lưỡi ở giữa và hơi lùi, âm ngắn.",
  "ə": "Âm chỉ xuất hiện ở vần đọc lướt, không nhấn mạnh — khác với âm ơ đầy đủ của tiếng Việt. Miệng gần như thả lỏng hoàn toàn, lưỡi ở giữa. Ví dụ âm đầu của 'about' đọc lướt, không đọc rõ thành 'ơ-bao'.",
  "ʃ": "Âm này tiếng Việt chuẩn không có; người miền Nam nghe chữ 's' của mình gần giống âm này, nhưng để đọc đúng 'ship' thì lưỡi phải đặt sau lợi trên và thổi hẹp hơn. Lưỡi nâng ở giữa, môi hơi chu ra, thổi hơi xì tròn và mềm hơn âm s."
};
// Độ mở hàm tương đối do trang tự gán (thang 0-4) + âm đích của nguyên âm đôi (dùng cho hình trượt).
var RB_PH_JAW = { "i:": 1, "ɪ": 1.5, "e": 2, "æ": 3.5, "ɑ:": 4, "ɒ": 3.5, "ɔ:": 2.5, "ʊ": 1.5, "u:": 1, "ʌ": 2.5, "ɜ:": 2, "ə": 1.5, "eɪ": 2, "aɪ": 3.5, "ɔɪ": 2.5, "əʊ": 1.5, "aʊ": 3.5, "ɪə": 1.5, "eə": 2, "ʊə": 1.5, "p": 0.5, "b": 0.5, "t": 1, "d": 1, "k": 1.5, "ɡ": 1.5, "tʃ": 1.5, "dʒ": 1.5, "f": 0.5, "v": 0.5, "θ": 1, "ð": 1, "s": 0.5, "z": 0.5, "ʃ": 1, "ʒ": 1, "h": 2, "m": 0.5, "n": 1, "ŋ": 1.5, "l": 1, "r": 1.5, "w": 1, "j": 0.5 };
var RB_PH_GLIDE = { "eɪ": "ɪ", "aɪ": "ɪ", "ɔɪ": "ɪ", "əʊ": "ʊ", "aʊ": "ʊ", "ɪə": "ə", "eə": "ə", "ʊə": "ə" };
// Từ ví dụ cho toàn bảng 44 âm (bài học đủ 44 âm từ giai đoạn 1.6).
var RB_PH_ALL_EXAMPLES = { "i:": "see", "ɪ": "ship", "e": "bed", "æ": "cat", "ɑ:": "car", "ɒ": "hot", "ɔ:": "horse", "ʊ": "book", "u:": "food", "ʌ": "cup", "ɜ:": "bird", "ə": "about", "eɪ": "day", "aɪ": "night", "ɔɪ": "boy", "əʊ": "go", "aʊ": "now", "ɪə": "here", "eə": "hair", "ʊə": "sure", "p": "pen", "b": "bag", "t": "ten", "d": "dog", "tʃ": "chair", "dʒ": "job", "k": "key", "ɡ": "go", "f": "fish", "v": "van", "θ": "think", "ð": "this", "s": "see", "z": "zoo", "ʃ": "she", "ʒ": "television", "h": "hat", "m": "man", "n": "no", "ŋ": "sing", "l": "leg", "r": "red", "w": "water", "j": "yes" };

// ---------- 8. LỊCH ÔN, XP, THANG ĐIỂM, GHI CHÚ ----------
var RB_INTERVALS = [1, 3, 7, 14, 30];
var RB_SCHEDULE_TEXT = "1-3-7-14-30 ngày (chuẩn nội bộ của web)";
var RB_XP_RULES = [
  { what: "Học xong một bài", xp: 10 },
  { what: "Làm lại một bài đã xong", xp: 5 },
  { what: "Gõ câu lần đầu", xp: 20 },
  { what: "Luyện viết lần đầu", xp: 20 },
  { what: "Ôn một mục đến hạn", xp: 1 },
  { what: "Điểm danh mỗi ngày", xp: 5 },
  { what: "Kết thúc một phiên trò chuyện với AI", xp: 10 },
  { what: "Chuỗi 7 ngày", xp: 50 },
  { what: "Chuỗi 30 ngày", xp: 150 },
  { what: "Chuỗi 100 ngày", xp: 400 }
];
var RB_XP_LEVELS = [0, 50, 120, 220, 350, 520, 750, 1050, 1450, 2000];
var RB_XP_LEVEL_STEP = 700;
var RB_BAND_TABLE = {
  reading: [[39, 9.0], [37, 8.5], [35, 8.0], [33, 7.5], [30, 7.0], [27, 6.5], [23, 6.0], [19, 5.5], [15, 5.0], [13, 4.5], [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 2.0]],
  listening: [[39, 9.0], [37, 8.5], [35, 8.0], [32, 7.5], [30, 7.0], [26, 6.5], [23, 6.0], [19, 5.5], [16, 5.0], [13, 4.5], [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 2.0]]
};
var RB_BAND_NOTE = "Band ước lượng để tham khảo - IELTS không công bố bảng quy đổi cố định. Điểm neo tham khảo: Đọc 15/40 = 5,0; Nghe 16/40 = 5,0 (theo Teacher's Book Mindset Level 1, Cambridge).";
var RB_GLOSSARY = [
  { t: "Nấc nhớ", d: "Mỗi thẻ từ có 5 nấc nhớ, đúng thì lên nấc, đủ 5 nấc là thuộc hẳn." },
  { t: "Sổ lỗi sai", d: "Nơi gom mọi câu bạn làm sai để ôn lại sau, tới khi sửa xong mới thôi." },
  { t: "Chặng", d: "Một chặng là một đoạn đường học; bạn có thể học theo thứ tự hoặc nhảy tới chặng khác, bước nào bỏ qua sẽ gom vào 'Đã bỏ qua'." },
  { t: "Ôn giãn cách", d: "Ôn giãn cách là ôn lại đúng lúc sắp quên, các lần ôn cách nhau xa dần: 1-3-7-14-30 ngày (chuẩn nội bộ của web)." },
  { t: "IPA", d: "IPA là bảng ký hiệu phiên âm quốc tế: mỗi âm tiếng Anh có một ký hiệu riêng, viết giữa hai dấu gạch chéo như /i:/. Nhìn phiên âm là biết cách đọc một từ, kể cả từ bạn chưa gặp bao giờ." },
  { t: "Band", d: "Band là thang điểm của IELTS, từ 0 đến 9. Band càng cao nghĩa là tiếng Anh càng tốt." }
];

// ---------- 9. ĐƯỜNG DÂY AI (giữ nguyên hợp đồng, chưa gọi khi chưa đăng nhập) ----------
var RB_AI = {
  tutor: { fn: "ai-tutor", model: "gemini-3.5-flash", needsJwt: true, label: "Gia sư AI (đã hoạt động, cần đăng nhập để dùng)" },
  pronounce: { fn: "pronounce", req: ["audioBase64", "mimeType", "referenceText"], res: ["score", "transcript", "words", "issues", "modelUsed"], needsJwt: true }
};

// ---------- 10. LỘ TRÌNH CHƯƠNG 1 (thứ tự HIỂN THỊ) ----------
// Hàng kiểm tra cuối chương đứng sau 4 bước học.
// Cổng mở khi học xong 4/5 bước học (mốc 80% — chuẩn nội bộ của web, không phải chuẩn IELTS).
var RB_CH1_STEPS = [
  { id: "classroom", kind: "vocab", setIdx: 24, deckNo: 2, title: "Học xong: hiểu và nói 20 từ dùng trong lớp học", type: "Từ vựng · Từ lớp học", mins: 8 },
  { id: "gram0", kind: "grammar", gIdx: 0, title: "Học xong: tự giới thiệu 'Tôi là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram1", kind: "grammar", gIdx: 1, title: "Học xong: chỉ đồ vật và giới thiệu người 'Đây là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram2", kind: "grammar", gIdx: 2, title: "Học xong: nói tên mình 'Tôi tên là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "pron1", kind: "pron", wave: 1, title: "Học xong: đọc đúng 44 âm tiếng Anh", type: "Phát âm · 44 âm", mins: 15 },
  { id: "test", kind: "test", title: "Bài kiểm tra cuối chương 1", type: "Đánh giá", mins: 10 },
];
var RB_CH1_GATE_NEED = 4; /* 80% của 5 bước học còn lại (làm tròn lên) sau khi bỏ 2 bước chữ cái video/game */
var RB_CH1_GUIDEBOOK = {
  goal: "Học xong chương này, bạn hiểu 20 từ dùng trong lớp học, nói được 3 câu đầu tiên: I am..., This is..., My name is..., và đọc đúng 44 âm tiếng Anh theo đợt khó.",
  grammar: ["Tôi là... (I am...)", "Đây là... (This is...)", "Tôi tên là... (My name is...)"],
  phrases: ["Hello! (Xin chào!)", "My name is... (Tôi tên là...)", "Thank you! (Cảm ơn bạn!)", "Nice to meet you! (Rất vui được gặp bạn!)"],
  mistakes: ["Đọc âm dài thành âm ngắn (ship thành sheep do /ɪ/ và /i:/ lẫn nhau)", "Nuốt âm cuối của từ tiếng Anh (life thiếu /f/)", "Đọc /r/ rung như r tiếng Việt"]
};

// ---------- 11. GIAI ĐOẠN 1.5: cụm từ, cặp phân biệt, vùng đích gương ----------
// Cụm từ tự soạn cho 23 âm đợt 1 (bước 4 của bài phát âm).
var RB_PH_PHRASES = {
  "m": { ph: "a tall man", vi: "một người đàn ông cao" },
  "n": { ph: "No, thanks", vi: "Không, cảm ơn" },
  "p": { ph: "my pen", vi: "cái bút của tôi" },
  "b": { ph: "a big bag", vi: "một cái túi to" },
  "f": { ph: "a big fish", vi: "một con cá to" },
  "s": { ph: "I see", vi: "Tôi nhìn thấy" },
  "h": { ph: "my hat", vi: "cái mũ của tôi" },
  "l": { ph: "my leg", vi: "chân của tôi" },
  "t": { ph: "ten books", vi: "mười quyển sách" },
  "d": { ph: "my dog", vi: "con chó của tôi" },
  "k": { ph: "my key", vi: "chìa khóa của tôi" },
  "ɡ": { ph: "Let's go", vi: "Đi thôi" },
  "ŋ": { ph: "sing a song", vi: "hát một bài hát" },
  "j": { ph: "yes, please", vi: "vâng, làm ơn" },
  "i:": { ph: "I see", vi: "Tôi nhìn thấy" },
  "e": { ph: "my bed", vi: "giường của tôi" },
  "ɑ:": { ph: "my car", vi: "xe của tôi" },
  "ɔ:": { ph: "a horse", vi: "một con ngựa" },
  "u:": { ph: "good food", vi: "món ăn ngon" },
  "eɪ": { ph: "a good day", vi: "một ngày tốt lành" },
  "aɪ": { ph: "good night", vi: "chúc ngủ ngon" },
  "aʊ": { ph: "right now", vi: "ngay bây giờ" },
  "ɔɪ": { ph: "a good boy", vi: "một cậu bé ngoan" },
  "ɪ": { ph: "a big ship", vi: "một con tàu lớn" },
  "ʊ": { ph: "my book", vi: "quyển sách của tôi" },
  "ʌ": { ph: "a cup", vi: "một cái cốc" },
  "ɒ": { ph: "a hot day", vi: "một ngày nóng" },
  "ɪə": { ph: "come here", vi: "đến đây" },
  "eə": { ph: "my hair", vi: "tóc của tôi" },
  "ʊə": { ph: "I am sure", vi: "tôi chắc chắn" },
  "əʊ": { ph: "let's go", vi: "đi thôi" },
  "ə": { ph: "about me", vi: "về tôi" },
  "v": { ph: "my van", vi: "xe tải nhỏ của tôi" },
  "z": { ph: "the zoo", vi: "sở thú" },
  "tʃ": { ph: "my chair", vi: "ghế của tôi" },
  "dʒ": { ph: "my job", vi: "công việc của tôi" },
  "r": { ph: "a red pen", vi: "một cây bút đỏ" },
  "w": { ph: "cold water", vi: "nước lạnh" },
  "æ": { ph: "a black cat", vi: "một con mèo đen" },
  "ɜ:": { ph: "a bird", vi: "một con chim" },
  "θ": { ph: "I think", vi: "tôi nghĩ" },
  "ð": { ph: "this book", vi: "quyển sách này" },
  "ʒ": { ph: "on television", vi: "trên ti vi" },
  "ʃ": { ph: "fresh fish", vi: "cá tươi" }
};
// Cặp phân biệt bước 6: a = từ chứa âm đích, b = từ chứa âm đối chiếu.
// minimal=true: cặp tối thiểu thật (chỉ khác nhau ở âm đích); false: cặp hay nhầm.
var RB_PH_PAIRS = {
  "m": { a: "sum", b: "sun", partner: "n", minimal: true },
  "n": { a: "sun", b: "sum", partner: "m", minimal: true },
  "p": { a: "pat", b: "bat", partner: "b", minimal: true },
  "b": { a: "bat", b: "pat", partner: "p", minimal: true },
  "f": { a: "fan", b: "van", partner: "v", minimal: true },
  "s": { a: "sip", b: "zip", partner: "z", minimal: true },
  "h": { a: "hat", b: "at", partner: "không có /h/", minimal: false },
  "l": { a: "light", b: "right", partner: "r", minimal: true },
  "t": { a: "to", b: "do", partner: "d", minimal: true },
  "d": { a: "do", b: "to", partner: "t", minimal: true },
  "k": { a: "coat", b: "goat", partner: "ɡ", minimal: true },
  "ɡ": { a: "goat", b: "coat", partner: "k", minimal: true },
  "ŋ": { a: "sing", b: "sin", partner: "n", minimal: true },
  "j": { a: "yam", b: "jam", partner: "dʒ", minimal: true },
  "i:": { a: "sheep", b: "ship", partner: "ɪ", minimal: true },
  "e": { a: "bed", b: "bad", partner: "æ", minimal: true },
  "ɑ:": { a: "car", b: "core", partner: "ɔ:", minimal: true },
  "ɔ:": { a: "saw", b: "so", partner: "əʊ", minimal: true },
  "u:": { a: "fool", b: "full", partner: "ʊ", minimal: true },
  "eɪ": { a: "day", b: "die", partner: "aɪ", minimal: true },
  "aɪ": { a: "tie", b: "toy", partner: "ɔɪ", minimal: true },
  "aʊ": { a: "now", b: "know", partner: "əʊ", minimal: true },
  "ɔɪ": { a: "boy", b: "buy", partner: "aɪ", minimal: true },
  "ɪ": { a: "ship", b: "sheep", partner: "i:", minimal: true },
  "ʊ": { a: "pull", b: "pool", partner: "u:", minimal: true },
  "ʌ": { a: "cup", b: "cap", partner: "æ", minimal: true },
  "ɒ": { a: "hot", b: "hat", partner: "æ", minimal: true },
  "ɪə": { a: "here", b: "hair", partner: "eə", minimal: true },
  "eə": { a: "hair", b: "here", partner: "ɪə", minimal: true },
  "ʊə": { a: "sure", b: "shore", partner: "ɔ:", minimal: false },
  "əʊ": { a: "boat", b: "bought", partner: "ɔ:", minimal: true },
  "ə": { a: "about", b: "cat", partner: "không có /ə/", minimal: false },
  "v": { a: "van", b: "fan", partner: "f", minimal: true },
  "z": { a: "zip", b: "sip", partner: "s", minimal: true },
  "tʃ": { a: "chair", b: "share", partner: "ʃ", minimal: true },
  "dʒ": { a: "jam", b: "yam", partner: "j", minimal: true },
  "r": { a: "red", b: "led", partner: "l", minimal: true },
  "w": { a: "west", b: "vest", partner: "v", minimal: true },
  "æ": { a: "cat", b: "cut", partner: "ʌ", minimal: true },
  "ɜ:": { a: "bird", b: "bed", partner: "e", minimal: true },
  "θ": { a: "think", b: "sink", partner: "s", minimal: true },
  "ð": { a: "they", b: "day", partner: "d", minimal: true },
  "ʒ": { a: "television", b: "telephone", partner: "không có /ʒ/", minimal: false },
  "ʃ": { a: "she", b: "see", partner: "s", minimal: true }
};
// Bảng vùng đích gương — port từ code cũ của trang (r/s/o: [thấp, cao] hoặc null).
// Độ chính xác nhận diện trên mặt thật CHƯA đo; giao diện gương ghi rõ điều này.
var RB_MIRROR_TARGETS = {
  "i:": { r: null, s: [0.5, 1], o: [0, 0.4], hint: "Môi dẹt và kéo sang hai bên như đang cười, miệng gần như khép." },
  "ɪ": { r: null, s: [0.3, 0.9], o: [0, 0.5], hint: "Môi hơi dẹt, thả lỏng hơn âm i:, miệng mở nhỏ." },
  "e": { r: null, s: [0.1, 0.65], o: [0.1, 0.55], hint: "Miệng mở vừa, môi thả lỏng." },
  "æ": { r: null, s: [0.15, 0.8], o: [0.55, 1], hint: "Hàm hạ xuống, miệng mở khá rộng." },
  "ɑ:": { r: [0, 0.45], s: null, o: [0.6, 1], hint: "Miệng mở to, lưỡi lùi hẳn về sau." },
  "ɒ": { r: [0.15, 0.75], s: null, o: [0.45, 1], hint: "Miệng mở rộng, môi hơi tròn nhẹ." },
  "ɔ:": { r: [0.4, 1], s: null, o: [0.2, 0.7], hint: "Môi tròn vừa, miệng mở vừa." },
  "ʊ": { r: [0.45, 1], s: null, o: [0, 0.4], hint: "Môi tròn nhẹ và hơi chu ra, miệng mở nhỏ." },
  "u:": { r: [0.6, 1], s: null, o: [0, 0.35], hint: "Môi tròn và chu mạnh ra trước như thổi nến." },
  "ʌ": { r: null, s: null, o: [0.25, 0.7], hint: "Miệng mở vừa, môi thả lỏng." },
  "ɜ:": { r: [0, 0.5], s: null, o: [0.15, 0.55], hint: "Môi thả lỏng, miệng mở nhỏ tới vừa." },
  "ə": { r: [0, 0.5], s: [0, 0.6], o: [0.03, 0.45], hint: "Miệng thả lỏng gần như hoàn toàn, chỉ mở rất nhẹ." },
  "eɪ": { r: null, s: [0.3, 0.9], o: [0.05, 0.5], hint: "Môi hơi dẹt dần khi trượt âm." },
  "aɪ": { r: null, s: null, o: [0.4, 1], hint: "Mở to ở đầu âm rồi khép và dẹt dần về cuối." },
  "ɔɪ": { r: [0.25, 0.85], s: null, o: [0.15, 0.6], hint: "Môi hơi tròn ở đầu rồi dẹt ra." },
  "əʊ": { r: [0.3, 0.9], s: null, o: [0.03, 0.45], hint: "Môi tròn dần về cuối âm, miệng mở nhỏ." },
  "aʊ": { r: [0.25, 0.9], s: null, o: [0.25, 0.85], hint: "Miệng mở ở đầu rồi tròn môi và khép dần." },
  "ɪə": { r: null, s: [0.25, 0.8], o: [0.03, 0.45], hint: "Môi hơi dẹt, miệng mở nhỏ và thả lỏng dần." },
  "eə": { r: null, s: [0.1, 0.7], o: [0.15, 0.6], hint: "Miệng mở vừa và thả lỏng dần." },
  "ʊə": { r: [0.3, 0.85], s: null, o: [0.03, 0.45], hint: "Môi hơi tròn ở đầu rồi thả lỏng dần." },
  "p": { r: null, s: null, o: [0, 0.1], hint: "Mím chặt hai môi rồi bật mở đẩy hơi ra." },
  "b": { r: null, s: null, o: [0, 0.1], hint: "Mím chặt hai môi rồi bật mở, kèm rung cổ họng." },
  "t": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "d": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "k": { r: null, s: null, o: [0.15, 0.6], hint: "Miệng mở vừa, cuống lưỡi nâng ở phía sau." },
  "ɡ": { r: null, s: null, o: [0.15, 0.6], hint: "Miệng mở vừa, cuống lưỡi nâng ở phía sau, kèm rung cổ họng." },
  "tʃ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, miệng mở nhỏ." },
  "dʒ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, miệng mở nhỏ, kèm rung cổ họng." },
  "f": { r: null, s: null, o: null, hint: "Răng trên chạm nhẹ vào môi dưới - điểm này camera khó chấm tự động, hãy tự soi gương: thấy răng chạm môi dưới là đúng." },
  "v": { r: null, s: null, o: null, hint: "Răng trên chạm nhẹ vào môi dưới, kèm rung cổ họng - hãy tự soi gương để đối chiếu." },
  "θ": { r: null, s: null, o: null, hint: "Thè đầu lưỡi ra giữa hai hàm răng - hãy tự soi trong gương, thấy đầu lưỡi lộ ra một chút là đúng." },
  "ð": { r: null, s: null, o: null, hint: "Thè đầu lưỡi ra giữa hai hàm răng, kèm rung cổ họng - hãy tự soi trong gương để đối chiếu." },
  "s": { r: null, s: [0.15, 0.7], o: [0, 0.25], hint: "Hai hàm răng gần khép, miệng mở rất ít, môi hơi dẹt." },
  "z": { r: null, s: [0.15, 0.7], o: [0, 0.25], hint: "Hai hàm răng gần khép, miệng mở rất ít, kèm rung cổ họng." },
  "ʃ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, thổi hơi xì tròn và mềm." },
  "ʒ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra như âm ʃ, kèm rung cổ họng." },
  "h": { r: null, s: null, o: [0.2, 0.7], hint: "Miệng mở theo nguyên âm đi sau, đẩy hơi nhẹ từ cổ họng." },
  "m": { r: null, s: null, o: [0, 0.1], hint: "Hai môi mím lại, hơi đi qua mũi." },
  "n": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "ŋ": { r: null, s: null, o: [0.1, 0.5], hint: "Miệng mở nhỏ tới vừa, cuống lưỡi nâng chặn phía sau." },
  "l": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "r": { r: [0.2, 0.75], s: null, o: [0.03, 0.45], hint: "Môi hơi tròn, đầu lưỡi cong lên và không chạm vào đâu cả - tự soi lưỡi trong gương." },
  "w": { r: [0.6, 1], s: null, o: [0, 0.4], hint: "Môi tròn và chu mạnh như sắp nói âm u: rồi mở nhanh." },
  "j": { r: null, s: [0.3, 0.85], o: [0.03, 0.4], hint: "Môi hơi dẹt như sắp nói âm i:, miệng mở nhỏ." }
};

// ---------- 12. GIAI ĐOẠN 2: ghi chú độ khó, khu loại âm, lý do cặp, âm đầu chữ cái ----------
// Ghi chú 3 nhóm độ khó — nguyên văn web cũ (báo cáo rà soát 6.2), nhóm khó sửa
// câu đầu thành 6 âm gồm /ʃ/. Cảnh báo âm cuối giữ nguyên.
var RB_PH_DIFF_NOTES = {
  quen: { t: "Dễ - âm quen với người Việt", d: "Các âm này tiếng Việt có âm gần giống nên học nhanh. Chỉ cần chú ý độ dài hơi (âm dài như /i:/, /u:/, /ɑ:/ phải kéo dài hơn hẳn âm ngắn) và vị trí lưỡi là nghe đã rõ ràng." },
  lech: { t: "Vừa - âm hay đọc lệch", d: "Các âm này có một âm quen gần giống trong tiếng Việt nên rất dễ bị đọc trượt sang âm quen: /ɪ/ hay thành /i:/ (ship thành sheep), /ʊ/ hay thành /u:/, /əʊ/ hay thành 'ô', /r/ hay rung như r tiếng Việt. Nghe kỹ điểm khác nhau của từng cặp rồi mới đọc theo." },
  kho: { t: "Khó - âm khó và âm cuối", d: "Đây là các âm tiếng Việt chuẩn không có (/θ/, /ð/, /æ/, /ɜ:/, /ʒ/, /ʃ/) - phải học khẩu hình mới hẳn, đừng cố tìm âm Việt thay thế. Riêng chuyện ÂM CUỐI: người Việt còn hay 'nuốt' âm cuối của từ (đọc 'cat' thiếu /t/, 'bus' thiếu /s/, 'watched' thiếu /t/) làm người nghe không hiểu hoặc hiểu sai thì - khi luyện các âm phụ âm, hãy bật hẳn âm cuối ra rồi dừng một nhịp mới sang từ tiếp theo." }
};
// Khu loại âm — đúng định nghĩa web cũ (báo cáo 6.1). Đợt khó vẫn là thứ tự học chính;
// chế độ này chỉ là cách xem thứ hai, không đổi thứ tự học.
var RB_PH_TYPE_GROUPS = [
  { key: "mono", t: "Nguyên âm đơn (12 âm)", d: "các âm ngắn gọn rung từ cổ họng", list: ["i:", "ɪ", "e", "æ", "ɑ:", "ɒ", "ɔ:", "ʊ", "u:", "ʌ", "ɜ:", "ə"] },
  { key: "di", t: "Nguyên âm đôi (8 âm)", d: "âm trượt từ âm này sang âm khác", list: ["eɪ", "aɪ", "ɔɪ", "əʊ", "aʊ", "ɪə", "eə", "ʊə"] },
  { key: "cons", t: "Phụ âm (24 âm)", d: "được tạo khi môi, răng và lưỡi chặn luồng hơi", list: ["p", "b", "t", "d", "k", "ɡ", "tʃ", "dʒ", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", "m", "n", "ŋ", "l", "r", "w", "j"] }
];
// Lý do riêng cho 4 cặp không tối thiểu thật (báo cáo 6.6) — hiển thị ở bước 6
// thay cho câu chung chung cũ.
var RB_PH_PAIR_REASONS = {
  "h": "Âm /h/ không có cặp đối lập rung/không rung — bài này chỉ luyện nhận diện có hay không có /h/ ở đầu từ.",
  "ʊə": "Từ sure và shore ngày nay nhiều người Anh đọc giống hệt nhau (/ʃɔː/) nên không còn là cặp tối thiểu thật — bài này chỉ luyện nghe âm /ʊə/ trong sure.",
  "ə": "Hai từ này khác nhau nhiều âm, không phải cặp tối thiểu — bài này chỉ luyện nhận diện âm /ə/ đọc lướt trong about.",
  "ʒ": "Hai từ này khác nhau nhiều âm, không phải cặp tối thiểu — bài này chỉ luyện nhận diện âm /ʒ/ trong television."
};
// ---------- 13. GIAI ĐOẠN 2 (a20): BẢN ĐỒ 13 CHƯƠNG ----------
// Mục tiêu và năng lực làm được tự soạn theo chuẩn IELTS từng band, không sao chép.
// Chương chưa dựng xong ghi "sắp mở" — không bịa nội dung bài học bên trong.
var RB_CHAPTER_MAP = [
  { band: "Band 0", title: "Chào hỏi và 44 âm", status: "open", goal: "Hiểu 20 từ lớp học, nói được 3 câu I am... / This is... / My name is..., đọc đúng 44 âm tiếng Anh theo đợt khó.", can: ["Chào hỏi và giới thiệu tên", "Hiểu 20 từ lớp học", "Đọc đúng 44 âm tiếng Anh"] },
  { band: "Band 2,0", title: "Câu đơn giản và từ quen thuộc", status: "soon", goal: "Hiểu và nói những câu rất đơn giản về bản thân và những việc quen thuộc hằng ngày.", can: ["Nói câu đơn về tên, tuổi, nơi ở", "Hiểu câu hỏi đơn giản khi nói chậm và rõ"] },
  { band: "Band 2,5", title: "Nói về bản thân và gia đình", status: "soon", goal: "Kể ngắn gọn về gia đình, bạn bè và thói quen hằng ngày bằng câu đơn nối nhau.", can: ["Giới thiệu gia đình bằng vài câu đơn", "Nói về việc mình làm mỗi ngày"] },
  { band: "Band 3,0", title: "Giao tiếp đơn giản hằng ngày", status: "soon", goal: "Xoay xở trong các tình huống quen thuộc: mua đồ, hỏi đường, hỏi giờ.", can: ["Hỏi và trả lời về giá cả, giờ giấc", "Hiểu biển báo và thông báo ngắn"] },
  { band: "Band 3,5", title: "Mô tả người và việc quen thuộc", status: "soon", goal: "Mô tả người, đồ vật và nơi chốn quen thuộc bằng câu đơn và câu ghép đơn giản.", can: ["Mô tả ngoại hình và tính cách đơn giản", "Kể lại một việc đã làm hôm qua"] },
  { band: "Band 4,0", title: "Giao tiếp cơ bản trong đời sống", status: "soon", goal: "Giao tiếp được ở mức cơ bản trong học tập và đời sống, dù còn ngập ngừng và sai nhiều.", can: ["Trao đổi thông tin cơ bản qua lại", "Viết đoạn ngắn về chủ đề quen thuộc"] },
  { band: "Band 4,5", title: "Đọc - nghe đoạn ngắn, viết đoạn ngắn", status: "soon", goal: "Đọc hiểu đoạn văn ngắn, nghe hiểu ý chính của đoạn hội thoại chậm, viết đoạn văn có mở - thân - kết đơn giản.", can: ["Tìm ý chính trong đoạn ngắn", "Viết đoạn văn 5-7 câu đúng chủ đề"] },
  { band: "Band 5,0", title: "Giao tiếp công việc và học tập cơ bản", status: "soon", goal: "Dùng tiếng Anh ở mức đủ cho giao tiếp hằng ngày và học tập cơ bản, còn sai nhưng người nghe vẫn hiểu.", can: ["Trình bày quan điểm đơn giản có lý do", "Đọc hiểu bài văn ngắn và trả lời câu hỏi"] },
  { band: "Band 5,5", title: "Trình bày ý kiến, viết bài ngắn", status: "soon", goal: "Trình bày ý kiến có lý do và ví dụ, viết bài ngắn có cấu trúc rõ ràng.", can: ["Nói liền mạch 1-2 phút về chủ đề quen thuộc", "Viết bài Task 2 ngắn có luận điểm"] },
  { band: "Band 6,0", title: "Giao tiếp tự tin trong học tập và công việc", status: "soon", goal: "Dùng tiếng Anh tự tin trong hầu hết tình huống học tập và công việc, dù còn sai ở câu phức tạp.", can: ["Thảo luận và tranh luận ở mức cơ bản", "Đọc hiểu bài dài và tóm tắt ý chính"] },
  { band: "Band 6,5", title: "Lập luận và viết bài có cấu trúc", status: "soon", goal: "Lập luận có chiều sâu, dùng từ nối và câu phức tương đối chính xác.", can: ["Viết bài Task 2 có phản biện và kết luận", "Nói Part 3 có mở rộng ý"] },
  { band: "Band 7,0", title: "Dùng tiếng Anh linh hoạt, chính xác", status: "soon", goal: "Dùng tiếng Anh linh hoạt trong học thuật và công việc, sai sót hiếm và không cản trở giao tiếp.", can: ["Dùng từ ngữ ít phổ biến đúng ngữ cảnh", "Viết bài có giọng văn phù hợp"] },
  { band: "Band 7,5+", title: "Gần như người bản địa trong học thuật và công việc", status: "soon", goal: "Giao tiếp gần như trôi chảy, hiểu cả hàm ý và sắc thái trong văn bản và hội thoại phức tạp.", can: ["Hiểu hàm ý và giọng điệu trong bài khó", "Viết và nói có phong cách riêng, chính xác cao"] }
];
// ---------- CHAT LOC (GĐ2, a17): So tay chang cho 12 chuong sau ----------
// Noi dung tu soan tong quat theo muc tieu tung chuong (RB_CHAPTER_MAP),
// khong chep sach hay de thi. Chuong 1 dung RB_CH1_GUIDEBOOK san co.
var CL_GUIDEBOOKS = {
  "Band 2,0": { grammar: ["Câu đơn với to be và have got", "Thì hiện tại đơn cho thói quen", "Mạo từ a/an/the cơ bản"], phrases: ["I live in... (Tôi sống ở...)", "I like... (Tôi thích...)", "Can you help me? (Bạn giúp tôi được không?)"], mistakes: ["Quên thêm -s cho ngôi thứ ba số ít (he go thành he goes)", "Dùng sai a/an trước nguyên âm", "Bỏ mạo từ the trước danh từ đã xác định"] },
  "Band 2,5": { grammar: ["Thì hiện tại tiếp diễn", "Câu so sánh hơn với -er và more", "Từ nối and/but/because"], phrases: ["I am doing... (Tôi đang...)", "My family has... (Gia đình tôi có...)", "I usually... (Tôi thường...)"], mistakes: ["Nhầm thì hiện tại đơn với tiếp diễn", "So sánh hơn thiếu than", "Dùng very thay vì so sánh khi cần"] },
  "Band 3,0": { grammar: ["Thì quá khứ đơn", "Câu hỏi với Wh- và Yes/No", "Giới từ chỉ nơi chốn và thời gian"], phrases: ["How much is it? (Cái này bao nhiêu tiền?)", "Where is...? (... ở đâu?)", "What time is it? (Mấy giờ rồi?)"], mistakes: ["Quên đổi động từ sang quá khứ", "Đặt sai vị trí giới từ chỉ nơi chốn", "Hỏi giờ bằng cấu trúc tiếng Việt dịch sang"] },
  "Band 3,5": { grammar: ["Thì hiện tại hoàn thành cơ bản", "Câu ghép với and/but/so", "Tính từ so sánh nhất"], phrases: ["He is taller than me. (Anh ấy cao hơn tôi.)", "I went there yesterday. (Hôm qua tôi đã tới đó.)", "This is the best one. (Đây là cái tốt nhất.)"], mistakes: ["Nhầm quá khứ đơn với hiện tại hoàn thành", "So sánh nhất thiếu the", "Câu ghép thiếu từ nối nên ý rời rạc"] },
  "Band 4,0": { grammar: ["Thì quá khứ tiếp diễn", "Câu điều kiện loại 1", "Động từ khuyết thiếu can/could/should"], phrases: ["If it rains, I will stay home. (Nếu trời mưa, tôi sẽ ở nhà.)", "You should try this. (Bạn nên thử cái này.)", "I was reading when you called. (Tôi đang đọc thì bạn gọi.)"], mistakes: ["Dùng will trong cả hai vế câu điều kiện", "Nhầm could (quá khứ/khả năng) với can", "Quá khứ tiếp diễn thiếu was/were"] },
  "Band 4,5": { grammar: ["Câu bị động cơ bản", "Mệnh đề quan hệ who/which/that", "Từ nối đoạn văn firstly/finally"], phrases: ["This book was written in 2020. (Cuốn sách này được viết năm 2020.)", "The man who helped me... (Người đàn ông đã giúp tôi...)", "Firstly,... Finally,... (Trước hết,... Cuối cùng,...)"], mistakes: ["Bị động thiếu be + phân từ 2", "Mệnh đề quan hệ thiếu đại từ hoặc thừa chủ ngữ", "Đoạn văn không có từ nối nên ý nhảy lung tung"] },
  "Band 5,0": { grammar: ["Thì hiện tại hoàn thành tiếp diễn", "Câu điều kiện loại 2", "Cụm động từ thường gặp"], phrases: ["If I had time, I would travel. (Nếu tôi có thời gian, tôi sẽ đi du lịch.)", "I have been learning English for a year. (Tôi học tiếng Anh được một năm rồi.)", "I agree with you. (Tôi đồng ý với bạn.)"], mistakes: ["Điều kiện loại 2 dùng would ở cả hai vế", "Nhầm hiện tại hoàn thành với hoàn thành tiếp diễn", "Cụm động từ tách sai vị trí tân ngữ"] },
  "Band 5,5": { grammar: ["Câu gián tiếp cơ bản", "Mệnh đề nhượng bộ although/despite", "Từ học thuật cho Task 2"], phrases: ["She said she was busy. (Cô ấy nói cô ấy bận.)", "Although it was hard, I finished it. (Dù khó, tôi vẫn làm xong.)", "In my opinion,... (Theo ý kiến của tôi,...)"], mistakes: ["Câu gián tiếp quên lùi thì", "Although đi với but trong cùng một câu", "Dùng từ nói chuyện thường ngày trong bài viết học thuật"] },
  "Band 6,0": { grammar: ["Câu phức với mệnh đề danh từ", "Đảo ngữ nhẹ với Not only", "Collocation cho chủ đề học thuật"], phrases: ["What surprises me is that... (Điều làm tôi ngạc nhiên là...)", "Not only is it useful, but it is also cheap. (Nó không chỉ hữu ích mà còn rẻ.)", "There is strong evidence that... (Có bằng chứng mạnh rằng...)"], mistakes: ["Mệnh đề danh từ giữ nguyên thứ tự câu hỏi", "Đảo ngữ thiếu trợ động từ", "Collocation dịch từng từ từ tiếng Việt"] },
  "Band 6,5": { grammar: ["Câu điều kiện hỗn hợp", "Mệnh đề phân từ rút gọn", "Từ nối lập luận however/nevertheless"], phrases: ["If I had studied harder, I would have a better job now. (Nếu trước đây tôi học chăm hơn, giờ tôi đã có việc tốt hơn.)", "However, this view ignores... (Tuy nhiên, quan điểm này bỏ qua...)", "Having finished the report, she went home. (Làm xong báo cáo, cô ấy về nhà.)"], mistakes: ["Điều kiện hỗn hợp trộn sai thì hai vế", "Phân từ rút gọn sai chủ ngữ", "However đặt sai vị trí làm câu khó đọc"] },
  "Band 7,0": { grammar: ["Câu nhấn mạnh với cleft", "Câu giả định với wish/if only", "Giọng văn học thuật và trang trọng"], phrases: ["It was practice that made the difference. (Chính luyện tập đã tạo ra khác biệt.)", "I wish I had started earlier. (Ước gì tôi đã bắt đầu sớm hơn.)", "It is widely believed that... (Người ta tin rộng rãi rằng...)"], mistakes: ["Câu nhấn mạnh sai cấu trúc it was... that...", "Wish + quá khứ đơn dùng cho ước ở hiện tại bị nhầm với quá khứ", "Giọng văn lúc trang trọng lúc xuồng xã trong cùng một bài"] },
  "Band 7,5+": { grammar: ["Câu phức nhiều tầng", "Sắc thái từ đồng nghĩa", "Phong cách viết và nói riêng"], phrases: ["What matters most is not speed but accuracy. (Điều quan trọng nhất không phải tốc độ mà là độ chính xác.)", "On the whole, the benefits outweigh the drawbacks. (Nhìn chung, lợi ích lớn hơn hạn chế.)", "This raises a deeper question: ... (Điều này đặt ra một câu hỏi sâu hơn: ...)"], mistakes: ["Câu nhiều tầng làm người đọc lạc mất ý chính", "Từ đồng nghĩa dùng sai sắc thái trang trọng", "Cố dùng từ khó khiến câu gượng gạo"] }
};


// ---------- 14. LUYỆN TẬP THI (4 kỹ năng riêng + buổi thi kết thúc đợt) ----------
// Tiêu chí chấm Nói/Viết: tên 4 tiêu chí là tiêu chí chính thức của IELTS;
// mô tả từng mức Band 5/6/7 dưới đây do web tự viết bằng tiếng Việt đơn giản.
// Tự đánh giá: người học tự chọn mức cho từng tiêu chí, web chỉ tính trung bình,
// không tự nhận là điểm thi thật — luôn ghi rõ "Tự đánh giá".
var RB_SPEAK_CRITERIA = [
  { key: "flu", name: "Nói trôi chảy và mạch lạc", d5: "Nói còn ngắt quãng nhiều, ý nối nhau chưa trơn nhưng người nghe vẫn hiểu ý chính.", d6: "Nói khá liền mạch, có lúc ngập ngừng khi tìm từ nhưng ý vẫn nối nhau được.", d7: "Nói trôi chảy, ít ngập ngừng, ý nối nhau tự nhiên, chỉ khựng lại đôi chỗ khi diễn đạt ý khó." },
  { key: "lex", name: "Từ vựng", d5: "Dùng được từ quen thuộc cho chủ đề quen thuộc, đôi khi dùng từ chưa đúng chỗ hoặc lặp từ.", d6: "Dùng được từ cho nhiều chủ đề, có paraphrase đơn giản, đôi khi chọn từ chưa thật chính xác.", d7: "Dùng từ đa dạng và khá chính xác, có từ ít phổ biến dùng đúng chỗ, paraphrase linh hoạt." },
  { key: "gram", name: "Ngữ pháp", d5: "Dùng được câu đơn và vài câu ghép, còn sai nhiều ở câu phức nhưng ý vẫn hiểu được.", d6: "Dùng được câu đơn và câu phức, có sai sót nhưng ít làm người nghe hiểu nhầm.", d7: "Dùng câu phức tương đối chính xác, sai sót hiếm và không cản trở người nghe." },
  { key: "pron", name: "Phát âm", d5: "Phát âm đủ rõ để hiểu dù còn lệch nhiều âm, người nghe phải tập trung mới theo kịp.", d6: "Phát âm khá rõ, có trọng âm và ngữ điệu cơ bản, thỉnh thoảng lệch âm nhưng vẫn hiểu được.", d7: "Phát âm rõ và tự nhiên, trọng âm và ngữ điệu tốt, chỉ lệch nhẹ ở vài âm khó." }
];
var RB_WRITE_CRITERIA = [
  { key: "task", name: "Trả lời đúng yêu cầu đề", d5: "Trả lời được ý chính của đề nhưng còn thiếu ý hoặc lạc ý ở vài chỗ.", d6: "Trả lời đủ các ý chính của đề, có lập trường và lý do, đôi chỗ chưa triển khai sâu.", d7: "Trả lời đầy đủ và sâu các ý của đề, lập trường rõ, lý do và ví dụ thuyết phục." },
  { key: "coh", name: "Mạch lạc và liên kết", d5: "Bài có mở - thân - kết nhưng ý nối nhau còn rời rạc, từ nối dùng còn đơn điệu.", d6: "Bài có bố cục rõ, ý nối nhau khá trơn bằng từ nối và từ thay thế, đôi chỗ còn gượng.", d7: "Bài mạch lạc, ý nối nhau tự nhiên, dùng từ nối và từ thay thế đa dạng và đúng chỗ." },
  { key: "lex", name: "Từ vựng", d5: "Dùng được từ cho chủ đề quen thuộc, còn lặp từ và sai chính tả ở vài chỗ.", d6: "Dùng từ đa dạng hơn, có paraphrase và collocation đơn giản, sai sót ít.", d7: "Dùng từ chính xác và đa dạng, có từ học thuật dùng đúng chỗ, chính tả gần như không sai." },
  { key: "gram", name: "Ngữ pháp và câu", d5: "Dùng được câu đơn và vài câu phức, còn sai nhiều nhưng ý vẫn hiểu được.", d6: "Dùng được câu phức và cấu trúc đa dạng, có sai sót nhưng không làm lệch ý.", d7: "Câu đa dạng và chính xác, sai sót hiếm, dấu câu đúng." }
];
// Đọc số band từ nhãn "Band 6.0"/"Band 7.5+" để lọc bài theo chặng thi thử.
function bandNumOf(label) {
  var m = String(label || "").match(/([0-9]+(?:[.,][0-9]+)?)/);
  if (!m) return null;
  return parseFloat(m[1].replace(",", "."));
}
function bandSortVal(label) { var n = bandNumOf(label); return n === null ? 99 : n; }
// Đếm thật từ kho cũ (không ghi số mẫu): dùng để hiển thị ở tab Luyện tập.
function skillCounts() {
  var readQs = 0, lpQs = 0;
  (CONTENT.reading || []).forEach(function (r) { readQs += (r.questions || []).length; });
  (CONTENT.listeningPlus || []).forEach(function (r) { lpQs += (r.questions || []).length; });
  return {
    readingItems: (CONTENT.reading || []).length, readingQs: readQs,
    listenSingles: (CONTENT.listening || []).length,
    listenLongItems: (CONTENT.listeningPlus || []).length, listenLongQs: lpQs,
    speakP1: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 1; }).length,
    speakP2: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 2; }).length,
    speakP3: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 3; }).length,
    speakTotal: (CONTENT.speaking || []).length, roleplay: (CONTENT.roleplay || []).length,
    writeT1: (CONTENT.writing || []).filter(function (w) { return w.type === "Task 1"; }).length,
    writeT2: (CONTENT.writing || []).filter(function (w) { return w.type === "Task 2"; }).length,
    writeMail: (CONTENT.writing || []).filter(function (w) { return w.type !== "Task 1" && w.type !== "Task 2"; }).length,
    writeTotal: (CONTENT.writing || []).length, writeDrills: (CONTENT.writingDrills || []).length
  };
}


// ---------- U7-1. VIET LAI WHY 378 CAU DOC/NGHE (Doc 308 + Nghe dai 70) ----------
// Kho cu nam trong content.js (khong sua file do). content-new.js nap sau
// content.js nen viet lai why tai day, truoc khi bat ky man nao ve ra.
// Cach viet lai (khong bia du kien moi): moi why moi lay dung bang chung
// cua chinh cau do (doan trich trong why cu) + dap an dung cua chinh cau
// do + quy tac theo dang cau, theo chuan: vi du truoc, quy tac sau,
// tieng Viet don gian, khong mui ten, khong thuat ngu kho.
(function () {
  if (typeof CONTENT === "undefined") return;
  function u7WhyEvidence(oldWhy) {
    if (!oldWhy) return "";
    var m = oldWhy.match(/'([^']{6,})'/) || oldWhy.match(/"([^"]{6,})"/);
    if (m) return m[1];
    return oldWhy.split("\u2192")[0].replace(/^\u0110o\u1ea1n \d+:\s*/, "").replace(/^B\u00e0i vi\u1ebft:\s*/, "").trim();
  }
  function u7WhyAnswer(q) {
    var opts = q.options || q.o;
    if (opts && opts[q.a] !== undefined) return opts[q.a];
    if (typeof q.answer === "string") return q.answer.split("|")[0];
    if (typeof q.a === "string") return q.a;
    return "";
  }
  function u7WhyRule(q) {
    var t = q.type;
    if (t === "TFNG" || t === "TF" || t === "YNNG") {
      var opts = q.options || q.o || [];
      var v = opts[q.a];
      if (v === "True" || v === "Yes") return "C\u00e1ch l\u00e0m: \u0111\u1ed1i chi\u1ebfu t\u1eebng \u00fd trong c\u00e2u h\u1ecfi v\u1edbi \u0111\u00fang c\u00e2u trong b\u00e0i. B\u00e0i n\u00f3i \u0111\u00fang nh\u01b0 v\u1eady th\u00ec c\u00e2u n\u00e0y \u0111\u00fang.";
      if (v === "False" || v === "No") return "C\u00e1ch l\u00e0m: \u0111\u1ed1i chi\u1ebfu t\u1eebng \u00fd trong c\u00e2u h\u1ecfi v\u1edbi \u0111\u00fang c\u00e2u trong b\u00e0i. B\u00e0i n\u00f3i ng\u01b0\u1ee3c l\u1ea1i th\u00ec c\u00e2u n\u00e0y sai.";
      return "C\u00e1ch l\u00e0m: \u0111\u1ecdc k\u1ef9 c\u1ea3 b\u00e0i m\u00e0 kh\u00f4ng th\u1ea5y c\u00e2u n\u00e0o n\u00f3i t\u1edbi \u00fd n\u00e0y th\u00ec \u0111\u00e1p \u00e1n l\u00e0 kh\u00f4ng c\u00f3 th\u00f4ng tin \u2014 \u0111\u1eebng \u0111o\u00e1n \u0111\u00fang hay sai.";
    }
    if (t === "MC" || t === "SC") return "C\u00e1ch l\u00e0m: \u0111\u1ecdc k\u1ef9 c\u00e2u h\u1ecfi r\u1ed3i t\u00ecm \u0111\u00fang c\u00e2u trong b\u00e0i n\u00f3i gi\u1ed1ng \u0111\u00e1p \u00e1n. \u0110\u00e1p \u00e1n nghe quen nh\u01b0ng b\u00e0i kh\u00f4ng n\u00f3i th\u00ec kh\u00f4ng ch\u1ecdn.";
    return "C\u00e1ch l\u00e0m: t\u00ecm \u0111\u00fang ch\u1ed7 trong b\u00e0i n\u00f3i t\u1edbi \u00fd n\u00e0y r\u1ed3i \u0111i\u1ec1n \u0111\u00fang t\u1eeb trong b\u00e0i, \u0111\u1eebng \u0111i\u1ec1n t\u1eeb m\u00ecnh \u0111o\u00e1n.";
  }
  function u7RewriteOneWhy(q) {
    if (!q || q.whyU7) return;
    var oldWhy = q.why || "";
    var ans = u7WhyAnswer(q);
    var opts = q.options || q.o || [];
    if (opts[q.a] === "Not Given") {
      q.whyOrig = oldWhy;
      q.why = "V\u00ed d\u1ee5: \u0111\u1ecdc k\u1ef9 c\u1ea3 b\u00e0i c\u0169ng kh\u00f4ng th\u1ea5y c\u00e2u n\u00e0o n\u00f3i t\u1edbi \u00fd n\u00e0y. V\u00ec v\u1eady \u0111\u00e1p \u00e1n \u201cNot Given\u201d \u0111\u00fang. " + u7WhyRule(q);
      q.whyU7 = true;
      return;
    }
    var ev = u7WhyEvidence(oldWhy);
    if (ev.charAt(ev.length - 1) === ".") ev = ev.slice(0, -1);
    var ex = ev ? "trong b\u00e0i c\u00f3 c\u00e2u \u201c" + ev + "\u201d" : oldWhy;
    q.whyOrig = oldWhy;
    q.why = "V\u00ed d\u1ee5: " + ex + ". V\u00ec v\u1eady \u0111\u00e1p \u00e1n \u201c" + ans + "\u201d \u0111\u00fang. " + u7WhyRule(q);
    q.whyU7 = true;
  }
  (CONTENT.reading || []).forEach(function (b) { (b.questions || []).forEach(u7RewriteOneWhy); });
  (CONTENT.listeningPlus || []).forEach(function (b) { (b.questions || []).forEach(u7RewriteOneWhy); });
})();

// ---------- NOI DUNG MOI THEO NGHIEN CUU SACH (dot 25/10) ----------
// Tu soan 100%, vi du truoc - quy tac sau, tieng Viet don gian.
// Khong chep nguyen van sach, khong chep de thi that, khong sao chep
// hinh/video cua ben thu ba. Moi muc gan dung chang theo RB_CHAPTER_MAP.
// Nhom 1: loi rieng cho nguoi Viet (khoang trong so 1 cua KHOANG-TRONG.md).
var BK_VIET_ERRORS = [
  { band: "Band 0", kind: "Phát âm", title: "Âm /θ/ trong think",
    wrong: "I tink so.", right: "I think so.",
    dist: "I sink so.",
    rule: "Tiếng Việt không có âm /θ/ nên người Việt hay đọc thành /t/. Cách sửa: đặt đầu lưỡi chạm nhẹ giữa hai răng rồi thổi hơi ra, không chạm răng vào nhau như âm /t/." },
  { band: "Band 0", kind: "Phát âm", title: "Bỏ phụ âm cuối",
    wrong: "I like this boo.", right: "I like this book.",
    dist: "I like this books.",
    rule: "Tiếng Việt ít bật phụ âm cuối nên người Việt hay nuốt mất /k/, /t/, /s/ cuối từ. Cách sửa: đọc chậm và cố tình bật rõ phụ âm cuối, dù nghe hơi nặng — người nghe cần phụ âm cuối để phân biệt book với boo." },
  { band: "Band 2,0", kind: "Ngữ pháp", title: "Ngôi thứ ba số ít thiếu -s",
    wrong: "He go to school every day.", right: "He goes to school every day.",
    dist: "He going to school every day.",
    rule: "Chủ ngữ he/she/it ở thì hiện tại đơn thì động từ phải thêm -s hoặc -es. Cách nhớ: chỉ có I/you/we/they giữ nguyên động từ, còn he/she/it thì động từ 'mặc thêm áo -s'." },
  { band: "Band 2,0", kind: "Từ vựng", title: "Bored hay boring?",
    wrong: "I am boring today.", right: "I am bored today.",
    dist: "I am bore today.",
    rule: "Muốn nói 'tôi thấy chán' thì dùng bored (người cảm thấy). Boring dùng cho vật/việc gây ra cảm giác: 'This film is boring.' (Bộ phim này chán.) Nhầm hai từ này là đổi ngược nghĩa: 'I am boring' nghĩa là 'tôi là người gây chán'." },
  { band: "Band 2,5", kind: "Ngữ pháp", title: "Thì tiếp diễn thiếu V-ing",
    wrong: "I am go to school now.", right: "I am going to school now.",
    dist: "I go to school now.",
    rule: "Thì hiện tại tiếp diễn có công thức đủ hai phần: am/is/are + động từ thêm -ing. Thiếu một trong hai phần là câu chưa thành hình: 'I am go' sai vì go chưa thêm -ing." },
  { band: "Band 3,0", kind: "Ngữ pháp", title: "Quá khứ đơn quên đổi dạng động từ",
    wrong: "Yesterday I go to the market.", right: "Yesterday I went to the market.",
    dist: "Yesterday I goed to the market.",
    rule: "Có yesterday (hôm qua) thì động từ phải ở dạng quá khứ. Go là động từ bất quy tắc nên quá khứ là went, không thêm -ed thành goed. Cách sửa: gặp dấu hiệu thời gian quá khứ thì dừng lại đổi dạng động từ trước khi viết tiếp." },
  { band: "Band 3,5", kind: "Ngữ pháp", title: "So sánh hơn dùng thừa more",
    wrong: "She is more taller than me.", right: "She is taller than me.",
    dist: "She is most taller than me.",
    rule: "Tính từ ngắn đã thêm -er thì không dùng thêm more — chỉ chọn một trong hai. More dùng cho tính từ dài (more beautiful), -er dùng cho tính từ ngắn (taller). Dùng cả hai cùng lúc là thừa." },
  { band: "Band 4,0", kind: "Ngữ pháp", title: "Mệnh đề if không dùng will",
    wrong: "If it will rain, I will stay home.", right: "If it rains, I will stay home.",
    dist: "If it rain, I will stay home.",
    rule: "Câu điều kiện loại 1: mệnh đề if dùng thì hiện tại đơn, will chỉ nằm ở mệnh đề chính. Dịch từ tiếng Việt sang dễ mắc lỗi này vì tiếng Việt nói 'nếu trời sẽ mưa' — sang tiếng Anh phải bỏ 'sẽ' ở mệnh đề if." },
  { band: "Band 4,5", kind: "Ngữ pháp", title: "Although đi với but là thừa",
    wrong: "Although it was hard, but I finished it.", right: "Although it was hard, I finished it.",
    dist: "Although it was hard, so I finished it.",
    rule: "Although đã mang nghĩa 'mặc dù' nên không cần thêm but hay so trong cùng một câu. Chọn một: hoặc 'Although..., ...' hoặc 'It was hard, but I finished it.' — không dùng cả hai." },
  { band: "Band 5,0", kind: "Ngữ pháp", title: "Điều kiện loại 2 không dùng would ở mệnh đề if",
    wrong: "If I would have time, I would travel.", right: "If I had time, I would travel.",
    dist: "If I have time, I would travel.",
    rule: "Câu điều kiện loại 2 nói về điều không thật ở hiện tại: mệnh đề if dùng quá khứ đơn (had), mệnh đề chính dùng would + động từ. Would chỉ nằm ở mệnh đề chính, không nằm ở cả hai vế." },
  { band: "Band 6,0", kind: "Từ vựng", title: "Collocation: do homework, không phải make homework",
    wrong: "I must make my homework tonight.", right: "I must do my homework tonight.",
    dist: "I must take my homework tonight.",
    rule: "Tiếng Anh ghép từ theo thói quen (collocation), không dịch từng từ từ tiếng Việt. Homework đi với do, còn make đi với a mistake, a decision, a plan. Cách học: học cả cụm do homework chứ không học từ homework đứng một mình." },
  { band: "Band 6,5", kind: "Ngữ pháp", title: "Mệnh đề phân từ sai chủ ngữ",
    wrong: "Walking home, the rain started.", right: "While I was walking home, it started to rain.",
    dist: "Walking home, I started the rain.",
    rule: "Câu mở đầu bằng Walking home thì chủ ngữ của câu chính phải là người đang đi bộ. Câu sai có chủ ngữ là the rain (cơn mưa) — mưa không đi bộ được. Cách sửa: viết rõ chủ ngữ I ngay từ đầu: 'While I was walking home, ...'." }
];
// Nhom 2: vi du doi song nguoi Viet (khoang trong so 8 cua KHOANG-TRONG.md).
// Doc/Nghe: doan ngan + cau hoi trac nghiem. Noi/Viet: de bai + dan y +
// bai mau tu soan de doi chieu, khong cham diem (tu luyen).
var BK_LIFE = [
  { band: "Band 2,0", skill: "Đọc", scene: "Chợ", title: "Mua cam ở chợ",
    text: "Lan goes to the market in the morning. She asks: 'How much are these oranges?' The seller says: '30,000 dong a kilo.' Lan says: 'I'll take two kilos, please.'",
    vi: "Buổi sáng Lan đi chợ. Cô hỏi: 'Cam này bao nhiêu tiền?' Người bán nói: '30.000 đồng một cân.' Lan nói: 'Cho tôi hai cân.'",
    qs: [
      { q: "Một cân cam giá bao nhiêu?", o: ["20.000 đồng", "30.000 đồng", "60.000 đồng"], a: 1, why: "Người bán nói '30,000 dong a kilo' — a kilo là một cân." },
      { q: "Lan phải trả tất cả bao nhiêu tiền?", o: ["30.000 đồng", "60.000 đồng", "90.000 đồng"], a: 1, why: "Lan mua hai cân, mỗi cân 30.000 đồng nên tất cả là 60.000 đồng." }
    ] },
  { band: "Band 2,5", skill: "Đọc", scene: "Trường học", title: "Giờ ra chơi ở trường",
    text: "Minh is a student in Hanoi. At break time, he plays football with his friends in the school yard. After school, he goes home and does his homework before dinner.",
    vi: "Minh là học sinh ở Hà Nội. Giờ ra chơi, bạn chơi bóng đá với bạn bè ở sân trường. Sau giờ học, bạn về nhà và làm bài tập trước bữa tối.",
    qs: [
      { q: "Giờ ra chơi Minh làm gì?", o: ["Đọc sách trong lớp", "Chơi bóng đá ở sân trường", "Về nhà ngay"], a: 1, why: "Bài ghi 'he plays football with his friends in the school yard'." },
      { q: "Minh làm bài tập vào lúc nào?", o: ["Trước bữa tối", "Sau bữa tối", "Vào giờ ra chơi"], a: 0, why: "Bài ghi 'he does his homework before dinner' — before dinner là trước bữa tối." }
    ] },
  { band: "Band 3,0", skill: "Đọc", scene: "Bệnh viện", title: "Đi khám ở bệnh viện",
    text: "Mrs. Hoa feels sick, so she goes to the hospital near her house. The doctor asks about her symptoms and checks her temperature. He says she should drink a lot of water and rest for two days.",
    vi: "Bà Hoa thấy mệt nên tới bệnh viện gần nhà. Bác sĩ hỏi về triệu chứng và đo nhiệt độ cho bà. Bác sĩ dặn bà uống nhiều nước và nghỉ ngơi hai ngày.",
    qs: [
      { q: "Bác sĩ làm gì cho bà Hoa?", o: ["Chỉ kê đơn thuốc", "Hỏi triệu chứng và đo nhiệt độ", "Cho bà nhập viện ngay"], a: 1, why: "Bài ghi 'asks about her symptoms and checks her temperature'." },
      { q: "Bác sĩ dặn bà Hoa làm gì?", o: ["Uống nhiều nước và nghỉ hai ngày", "Đi làm ngay hôm sau", "Không uống nước"], a: 0, why: "Bài ghi 'drink a lot of water and rest for two days'." }
    ] },
  { band: "Band 3,5", skill: "Nghe", scene: "Gia đình", title: "Bữa cơm tối nhà Lan",
    text: "In Lan's family, dinner starts at seven o'clock. Her mother cooks rice and fish, her father sets the table, and Lan helps wash the vegetables. After dinner, they talk about their day.",
    vi: "Ở nhà Lan, bữa tối bắt đầu lúc bảy giờ. Mẹ nấu cơm và cá, bố dọn bàn, Lan giúp rửa rau. Sau bữa tối, cả nhà kể cho nhau nghe về một ngày của mình.",
    qs: [
      { q: "Bữa tối nhà Lan bắt đầu lúc mấy giờ?", o: ["Sáu giờ", "Bảy giờ", "Tám giờ"], a: 1, why: "Bài ghi 'dinner starts at seven o'clock'." },
      { q: "Lan giúp việc gì trước bữa tối?", o: ["Nấu cơm", "Dọn bàn", "Rửa rau"], a: 2, why: "Bài ghi 'Lan helps wash the vegetables' — wash the vegetables là rửa rau." }
    ] },
  { band: "Band 4,0", skill: "Nghe", scene: "Trường học", title: "Cô giáo dặn bài tập về nhà",
    text: "Before the class ends, the teacher says: 'Please read pages 20 to 25 and answer questions 1 to 5. Bring your notebooks tomorrow, and don't forget to review the new words.'",
    vi: "Trước khi hết giờ học, cô giáo dặn: 'Các em đọc từ trang 20 đến trang 25 và trả lời câu 1 đến câu 5. Ngày mai mang vở đi, và đừng quên ôn từ mới.'",
    qs: [
      { q: "Học sinh phải đọc tới trang nào?", o: ["Trang 20", "Trang 25", "Trang 15"], a: 1, why: "Cô dặn 'read pages 20 to 25' — từ trang 20 đến trang 25." },
      { q: "Ngày mai học sinh phải mang gì đi học?", o: ["Sách giáo khoa", "Vở ghi", "Bút màu"], a: 1, why: "Cô dặn 'bring your notebooks tomorrow' — notebooks là vở ghi." }
    ] },
  { band: "Band 4,5", skill: "Nói", scene: "Gia đình", title: "Kể về một ngày cuối tuần của gia đình bạn",
    text: "Nói liền mạch khoảng 1 phút: cuối tuần vừa rồi gia đình bạn đã làm gì, ở đâu, và bạn cảm thấy thế nào.",
    vi: "Dàn ý gợi ý: (1) Cuối tuần nhà bạn đi đâu hoặc làm gì ở nhà. (2) Ai tham gia và mỗi người làm gì. (3) Điều bạn thích nhất và vì sao.",
    model: "Last weekend, my family went to my grandmother's house in the countryside. My mother cooked a big lunch, my father fixed the garden gate, and I played with my little cousin. I liked it most because we rarely have time to be together during the week.",
    modelVi: "Cuối tuần vừa rồi, gia đình tôi về nhà bà ngoại ở quê. Mẹ nấu một bữa trưa thịnh soạn, bố sửa cổng vườn, còn tôi chơi với em họ. Tôi thích nhất vì trong tuần cả nhà hiếm khi có thời gian ở bên nhau." },
  { band: "Band 5,0", skill: "Nói", scene: "Bệnh viện", title: "Mô tả lần bạn đi khám bệnh",
    text: "Nói liền mạch khoảng 1-2 phút: lần gần nhất bạn tới bệnh viện hoặc phòng khám, vì sao bạn tới đó, bác sĩ đã làm gì, và bạn học được gì về sức khỏe.",
    vi: "Dàn ý gợi ý: (1) Vì sao bạn tới bệnh viện. (2) Bác sĩ hỏi và kiểm tra những gì. (3) Lời dặn của bác sĩ và điều bạn rút ra.",
    model: "Last month I went to a clinic because I had a fever for two days. The doctor asked about my symptoms, checked my temperature and told me to drink a lot of water and rest. I learned that I should not wait too long before seeing a doctor.",
    modelVi: "Tháng trước tôi tới phòng khám vì sốt hai ngày. Bác sĩ hỏi triệu chứng, đo nhiệt độ và dặn tôi uống nhiều nước và nghỉ ngơi. Tôi rút ra là không nên chần chừ quá lâu mới đi khám." },
  { band: "Band 6,0", skill: "Viết", scene: "Công sở", title: "Viết email xin nghỉ một ngày",
    text: "Viết một email ngắn (khoảng 80-100 từ) cho quản lý của bạn: xin nghỉ một ngày vì lý do gia đình, nói rõ ngày nghỉ, công việc đã bàn giao cho ai, và cảm ơn quản lý.",
    vi: "Dàn ý gợi ý: (1) Mở đầu lịch sự và nêu rõ ngày xin nghỉ. (2) Lý do ngắn gọn, không kể dài. (3) Công việc đã bàn giao và lời cảm ơn.",
    model: "Dear Ms. Lan, I am writing to ask for one day off on Friday, 30 October, because of a family matter. I have finished this week's report and asked Hung to look after my emails while I am away. I will check my messages again on Monday morning. Thank you very much for your understanding. Best regards, Minh.",
    modelVi: "Chị Lan thân mến, Tôi viết email này để xin nghỉ một ngày vào thứ Sáu, ngày 30 tháng 10, vì việc gia đình. Tôi đã làm xong báo cáo tuần này và nhờ Hùng theo dõi email giúp trong lúc tôi vắng mặt. Sáng thứ Hai tôi sẽ kiểm tra lại tin nhắn. Cảm ơn chị rất nhiều vì đã thông cảm. Trân trọng, Minh." }
];
// Nhom 3: sac thai / phong cach, CHI o chang 7,5+ (khoang trong so 10).
// Khong dat muc nay xuong chang thap hon.
var BK_TONE = [
  { title: "get và obtain trong bài viết học thuật",
    formal: "Researchers obtained the data from 200 students.",
    informal: "Researchers got the data from 200 students.",
    note: "Trong bài viết học thuật, obtain trang trọng và chính xác hơn get. Get không sai trong nói chuyện thường ngày, nhưng trong Task 2 nó làm bài nghe xuồng xã.",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["Researchers got the data from 200 students.", "Researchers obtained the data from 200 students.", "Researchers took the data from 200 students."], a: 1, why: "Obtain là từ học thuật, hợp giọng văn trang trọng của Task 2; get hợp nói chuyện thường ngày hơn." } },
  { title: "kids và children trong bài viết học thuật",
    formal: "Children learn a second language faster than adults.",
    informal: "Kids learn a second language faster than adults.",
    note: "Kids là từ thân mật dùng khi nói chuyện. Trong bài viết học thuật dùng children — cùng nghĩa nhưng đúng phong cách.",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["Kids learn a second language faster than adults.", "Children learn a second language faster than adults.", "Little ones learn a second language faster than adults."], a: 1, why: "Children là từ trung tính, dùng được trong mọi phong cách; kids quá thân mật cho bài viết học thuật." } },
  { title: "a lot of và a considerable number of",
    formal: "A considerable number of students prefer online classes.",
    informal: "A lot of students prefer online classes.",
    note: "A lot of không sai nhưng quá thường ngày. Khi muốn bài nghe học thuật hơn, dùng a considerable number of (với danh từ đếm được) hoặc a significant amount of (với danh từ không đếm được).",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["A lot of students prefer online classes.", "A considerable number of students prefer online classes.", "Many many students prefer online classes."], a: 1, why: "A considerable number of là cụm học thuật, giữ nguyên nghĩa 'nhiều' nhưng đúng phong cách Task 2." } },
  { title: "I think và It could be argued that",
    formal: "It could be argued that online learning saves time.",
    informal: "I think online learning saves time.",
    note: "Trong Task 2, 'It could be argued that...' trình bày quan điểm một cách khách quan và học thuật hơn 'I think...'. Dùng I think nhiều lần làm bài nghe như ý kiến cá nhân, không như lập luận.",
    q: { q: "Cách mở đầu nào hợp với đoạn lập luận Task 2 hơn?", o: ["I think online learning saves time.", "It could be argued that online learning saves time.", "In my mind online learning saves time."], a: 1, why: "Cấu trúc không dùng chủ ngữ I làm lập luận nghe khách quan và học thuật hơn." } },
  { title: "but đầu câu và however giữa đoạn",
    formal: "Online classes are flexible. However, they require strong self-discipline.",
    informal: "Online classes are flexible. But they require strong self-discipline.",
    note: "But đứng đầu câu trong văn viết học thuật bị coi là chưa trang trọng. However nối hai câu đối lập một cách trang trọng và rõ ràng hơn.",
    q: { q: "Cách nối nào hợp với bài viết học thuật hơn?", o: ["Online classes are flexible. But they require strong self-discipline.", "Online classes are flexible. However, they require strong self-discipline.", "Online classes are flexible, but however they require strong self-discipline."], a: 1, why: "However là từ nối trang trọng cho văn viết; but đầu câu hợp văn nói hơn." } },
  { title: "say và argue khi trích quan điểm",
    formal: "Critics argue that social media harms teenagers.",
    informal: "Critics say that social media harms teenagers.",
    note: "Say chỉ nghĩa 'nói'. Argue thêm sắc thái 'đưa ra lập luận để bảo vệ quan điểm' — đúng với ngữ cảnh tranh luận trong Task 2. Chọn động từ theo sắc thái, không chỉ theo nghĩa chung.",
    q: { q: "Câu nào diễn đạt đúng sắc thái 'đưa ra lập luận phản đối' hơn?", o: ["Critics say that social media harms teenagers.", "Critics argue that social media harms teenagers.", "Critics tell that social media harms teenagers."], a: 1, why: "Argue mang sắc thái lập luận, còn say chỉ là nói chung chung; tell còn sai cấu trúc ở đây." } }
];
// Nhom 4: doi chieu format thi hien tai thay vi tin sach cu (khoang trong
// so 9). Chi ghi diem da co trong nghien cuu chuan chinh thong 23/10
// (Cambridge/IDP/British Council); khong bia chi tiet format.
var BK_FORMAT = [
  { old: "Sách cũ hay ghi chung chung 'thi Nghe khoảng 30 phút' mà không nói rõ cấu trúc.",
    now: "Nghe chính thức: 4 phần, 40 câu, khoảng 30 phút. Phần 1-2 là hội thoại đời sống hằng ngày, Phần 3-4 là bối cảnh học tập và bài nói học thuật." },
  { old: "Sách cũ có khi tách Đọc thành nhiều section nhỏ không đúng format hiện tại.",
    now: "Đọc Academic chính thức: 3 bài đọc, 40 câu, 60 phút (tính cả thời gian chuyển đáp án, không cộng thêm giờ). Bài lấy từ sách, tạp chí, báo, viết cho người đọc không chuyên về chủ đề học thuật." },
  { old: "Sách cũ có khi dạy Task 1 và Task 2 nặng ngang nhau.",
    now: "Viết chính thức: Task 1 tối thiểu 150 từ (khoảng 20 phút), Task 2 tối thiểu 250 từ (khoảng 40 phút); Task 2 tính nặng gấp đôi Task 1. Mỗi kỹ năng Viết chấm theo 4 tiêu chí, mỗi tiêu chí 25%." },
  { old: "Sách cũ có khi mô tả Nói như một bài phỏng vấn dài duy nhất.",
    now: "Nói chính thức: 3 phần, 11-14 phút. Part 1 hỏi đáp chủ đề quen thuộc (4-5 phút), Part 2 nói 1-2 phút sau 1 phút chuẩn bị, Part 3 thảo luận mở rộng chủ đề Part 2 (4-5 phút)." },
  { old: "Sách cũ hay in bảng 'bao nhiêu phần trăm thì lên bậc' hoặc '200 giờ = 1 band'.",
    now: "Không nhà cung cấp chính thống nào công bố ngưỡng % qua bậc; '200 giờ = 1 band' không phải chuẩn hiện hành. Cambridge tính giờ tích lũy theo cấp CEFR, còn IELTS.org ghi khoảng 3 tháng lên tối đa 0,5 band. Mốc 80% của web này là chuẩn nội bộ, không phải chuẩn IELTS." },
  { old: "Sách cũ viết cho thi giấy, chưa nhắc thi trên máy tính.",
    now: "Hiện nay có cả thi giấy và thi trên máy tính với cùng format 4 kỹ năng; bài thi thử của web này theo format trên nhưng ghi rõ giới hạn kho (phần Đọc của thi thử mới có 15 câu do kho tự soạn hiện tại, không mạo nhận là đề đủ)." }
];
