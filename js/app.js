/* ═══════════════════════════════════════════════════════════════
   AGUILAS FLAG FOOTBALL 7 — GALERÍA  |  js/app.js
   ───────────────────────────────────────────────────────────────
   ► HOW TO ADD YOUR PHOTOS:
     1. Upload all photos to Cloudinary (free at cloudinary.com)
     2. Copy each image URL from Cloudinary
     3. Replace the `src` values below with your Cloudinary URLs
     4. Update the `caption` text for each photo
     5. Add more objects to the array following the same format
   ═══════════════════════════════════════════════════════════════ */

const PHOTOS = [
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22975-Enhanced-NR_vejcuy.jpg", caption: "Jugada de ataque", alt: "R6M22975 Enhanced NR vejcuy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22974-Enhanced-NR_mudqv8.jpg", caption: "Defensa en acción", alt: "R6M22974 Enhanced NR mudqv8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22973-Enhanced-NR_idjwz0.jpg", caption: "¡Touchdown!", alt: "R6M22973 Enhanced NR idjwz0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22970-Enhanced-NR_dkny1o.jpg", caption: "Equipo unido", alt: "R6M22970 Enhanced NR dkny1o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22972-Enhanced-NR_za6ae4.jpg", caption: "Carrera al frente", alt: "R6M22972 Enhanced NR za6ae4" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22971-Enhanced-NR_skodrk.jpg", caption: "El marcador decide", alt: "R6M22971 Enhanced NR skodrk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22969-Enhanced-NR_bzakoa.jpg", caption: "Pase largo", alt: "R6M22969 Enhanced NR bzakoa" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22968-Enhanced-NR_gkhvcg.jpg", caption: "Bloqueo perfecto", alt: "R6M22968 Enhanced NR gkhvcg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22967-Enhanced-NR_ngiume.jpg", caption: "Festejo en equipo", alt: "R6M22967 Enhanced NR ngiume" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22965-Enhanced-NR_ayqcog.jpg", caption: "Preparación pre-juego", alt: "R6M22965 Enhanced NR ayqcog" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22966-Enhanced-NR_reti5i.jpg", caption: "El quarterback manda", alt: "R6M22966 Enhanced NR reti5i" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22964-Enhanced-NR_dzv4vl.jpg", caption: "Final de temporada", alt: "R6M22964 Enhanced NR dzv4vl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22963-Enhanced-NR_jvulwl.jpg", caption: "Gran jugada", alt: "R6M22963 Enhanced NR jvulwl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22962-Enhanced-NR_t9z9jv.jpg", caption: "Sprint al end zone", alt: "R6M22962 Enhanced NR t9z9jv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22961-Enhanced-NR_fstlee.jpg", caption: "Intercepción", alt: "R6M22961 Enhanced NR fstlee" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22960-Enhanced-NR_z4qzfn.jpg", caption: "Zona de anotación", alt: "R6M22960 Enhanced NR z4qzfn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22959-Enhanced-NR_s7lddf.jpg", caption: "Equipo Aguilas", alt: "R6M22959 Enhanced NR s7lddf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22956-Enhanced-NR_inzktq.jpg", caption: "En el campo", alt: "R6M22956 Enhanced NR inzktq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22958-Enhanced-NR_pi5mev.jpg", caption: "Partido intenso", alt: "R6M22958 Enhanced NR pi5mev" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22955-Enhanced-NR_s8tgub.jpg", caption: "Victoria merecida", alt: "R6M22955 Enhanced NR s8tgub" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22957-Enhanced-NR_l2umik.jpg", caption: "Ataque imparable", alt: "R6M22957 Enhanced NR l2umik" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22954-Enhanced-NR_pfqowt.jpg", caption: "Defensa cerrada", alt: "R6M22954 Enhanced NR pfqowt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22952-Enhanced-NR_xbqiiv.jpg", caption: "Pase de touchdown", alt: "R6M22952 Enhanced NR xbqiiv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22953-Enhanced-NR_rlldtl.jpg", caption: "Corrida de yarda", alt: "R6M22953 Enhanced NR rlldtl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22949-Enhanced-NR_ommslk.jpg", caption: "Celebración del equipo", alt: "R6M22949 Enhanced NR ommslk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22951-Enhanced-NR_xz73cv.jpg", caption: "Juego en equipo", alt: "R6M22951 Enhanced NR xz73cv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22948-Enhanced-NR_fdcmxu.jpg", caption: "Jugada de ataque", alt: "R6M22948 Enhanced NR fdcmxu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22950-Enhanced-NR_zdnohc.jpg", caption: "Defensa en acción", alt: "R6M22950 Enhanced NR zdnohc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22946-Enhanced-NR_ap3x8s.jpg", caption: "¡Touchdown!", alt: "R6M22946 Enhanced NR ap3x8s" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22947-Enhanced-NR_yb6dq1.jpg", caption: "Equipo unido", alt: "R6M22947 Enhanced NR yb6dq1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22945-Enhanced-NR_lhmyl5.jpg", caption: "Carrera al frente", alt: "R6M22945 Enhanced NR lhmyl5" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22941-Enhanced-NR_fvf4gi.jpg", caption: "El marcador decide", alt: "R6M22941 Enhanced NR fvf4gi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22943-Enhanced-NR_jkhaxn.jpg", caption: "Pase largo", alt: "R6M22943 Enhanced NR jkhaxn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22944-Enhanced-NR_oxtdjp.jpg", caption: "Bloqueo perfecto", alt: "R6M22944 Enhanced NR oxtdjp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22942-Enhanced-NR_x2zybo.jpg", caption: "Festejo en equipo", alt: "R6M22942 Enhanced NR x2zybo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22940-Enhanced-NR_fuaa9m.jpg", caption: "Preparación pre-juego", alt: "R6M22940 Enhanced NR fuaa9m" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22935-Enhanced-NR_jr1ade.jpg", caption: "El quarterback manda", alt: "R6M22935 Enhanced NR jr1ade" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22939-Enhanced-NR_tqwuqo.jpg", caption: "Final de temporada", alt: "R6M22939 Enhanced NR tqwuqo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22934-Enhanced-NR_kbhub0.jpg", caption: "Gran jugada", alt: "R6M22934 Enhanced NR kbhub0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22938-Enhanced-NR_jikei5.jpg", caption: "Sprint al end zone", alt: "R6M22938 Enhanced NR jikei5" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22936-Enhanced-NR_buqjf8.jpg", caption: "Intercepción", alt: "R6M22936 Enhanced NR buqjf8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22937-Enhanced-NR_pdd6ek.jpg", caption: "Zona de anotación", alt: "R6M22937 Enhanced NR pdd6ek" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22933-Enhanced-NR_dnjahh.jpg", caption: "Equipo Aguilas", alt: "R6M22933 Enhanced NR dnjahh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22928-Enhanced-NR_zinv4q.jpg", caption: "En el campo", alt: "R6M22928 Enhanced NR zinv4q" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22932-Enhanced-NR_rkw62z.jpg", caption: "Partido intenso", alt: "R6M22932 Enhanced NR rkw62z" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22930-Enhanced-NR_fjmevf.jpg", caption: "Victoria merecida", alt: "R6M22930 Enhanced NR fjmevf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22929-Enhanced-NR_naboc1.jpg", caption: "Ataque imparable", alt: "R6M22929 Enhanced NR naboc1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22927-Enhanced-NR_yyzfni.jpg", caption: "Defensa cerrada", alt: "R6M22927 Enhanced NR yyzfni" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22926-Enhanced-NR_naivrt.jpg", caption: "Pase de touchdown", alt: "R6M22926 Enhanced NR naivrt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22925-Enhanced-NR_p56fyc.jpg", caption: "Corrida de yarda", alt: "R6M22925 Enhanced NR p56fyc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22920-Enhanced-NR_zmseja.jpg", caption: "Celebración del equipo", alt: "R6M22920 Enhanced NR zmseja" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22924-Enhanced-NR_v2t7by.jpg", caption: "Juego en equipo", alt: "R6M22924 Enhanced NR v2t7by" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22922-Enhanced-NR_hmq9e2.jpg", caption: "Jugada de ataque", alt: "R6M22922 Enhanced NR hmq9e2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22923-Enhanced-NR_saxmnd.jpg", caption: "Defensa en acción", alt: "R6M22923 Enhanced NR saxmnd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22921-Enhanced-NR_ewkaq0.jpg", caption: "¡Touchdown!", alt: "R6M22921 Enhanced NR ewkaq0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22919-Enhanced-NR_ghrnc8.jpg", caption: "Equipo unido", alt: "R6M22919 Enhanced NR ghrnc8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22917-Enhanced-NR_frla6o.jpg", caption: "Carrera al frente", alt: "R6M22917 Enhanced NR frla6o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22916-Enhanced-NR_iylphf.jpg", caption: "El marcador decide", alt: "R6M22916 Enhanced NR iylphf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22918-Enhanced-NR_dcfjgv.jpg", caption: "Pase largo", alt: "R6M22918 Enhanced NR dcfjgv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22915-Enhanced-NR_t3fvcn.jpg", caption: "Bloqueo perfecto", alt: "R6M22915 Enhanced NR t3fvcn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22914-Enhanced-NR_lqugy6.jpg", caption: "Festejo en equipo", alt: "R6M22914 Enhanced NR lqugy6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22913-Enhanced-NR_wu4g0h.jpg", caption: "Preparación pre-juego", alt: "R6M22913 Enhanced NR wu4g0h" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22912-Enhanced-NR_fto2rf.jpg", caption: "El quarterback manda", alt: "R6M22912 Enhanced NR fto2rf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22909-Enhanced-NR_kpsfmc.jpg", caption: "Final de temporada", alt: "R6M22909 Enhanced NR kpsfmc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22910-Enhanced-NR_zl8lcx.jpg", caption: "Gran jugada", alt: "R6M22910 Enhanced NR zl8lcx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22911-Enhanced-NR_bpicly.jpg", caption: "Sprint al end zone", alt: "R6M22911 Enhanced NR bpicly" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22908-Enhanced-NR_zzb2ot.jpg", caption: "Intercepción", alt: "R6M22908 Enhanced NR zzb2ot" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22907-Enhanced-NR_jnrhef.jpg", caption: "Zona de anotación", alt: "R6M22907 Enhanced NR jnrhef" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22906-Enhanced-NR_kp5mua.jpg", caption: "Equipo Aguilas", alt: "R6M22906 Enhanced NR kp5mua" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22905-Enhanced-NR_laimgn.jpg", caption: "En el campo", alt: "R6M22905 Enhanced NR laimgn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22903-Enhanced-NR_zgtiru.jpg", caption: "Partido intenso", alt: "R6M22903 Enhanced NR zgtiru" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22904-Enhanced-NR_l7fskc.jpg", caption: "Victoria merecida", alt: "R6M22904 Enhanced NR l7fskc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22900-Enhanced-NR_tfnba6.jpg", caption: "Ataque imparable", alt: "R6M22900 Enhanced NR tfnba6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22902-Enhanced-NR_o3xezc.jpg", caption: "Defensa cerrada", alt: "R6M22902 Enhanced NR o3xezc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22901-Enhanced-NR_vdcy0s.jpg", caption: "Pase de touchdown", alt: "R6M22901 Enhanced NR vdcy0s" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22899-Enhanced-NR_dw4wqa.jpg", caption: "Corrida de yarda", alt: "R6M22899 Enhanced NR dw4wqa" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22897-Enhanced-NR_tmljqh.jpg", caption: "Celebración del equipo", alt: "R6M22897 Enhanced NR tmljqh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22896-Enhanced-NR_qjx6kn.jpg", caption: "Juego en equipo", alt: "R6M22896 Enhanced NR qjx6kn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22898-Enhanced-NR_mktz5o.jpg", caption: "Jugada de ataque", alt: "R6M22898 Enhanced NR mktz5o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22894-Enhanced-NR_gq83ak.jpg", caption: "Defensa en acción", alt: "R6M22894 Enhanced NR gq83ak" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22895-Enhanced-NR_hma8up.jpg", caption: "¡Touchdown!", alt: "R6M22895 Enhanced NR hma8up" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22893-Enhanced-NR_dg4ren.jpg", caption: "Equipo unido", alt: "R6M22893 Enhanced NR dg4ren" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22891-Enhanced-NR_btfphc.jpg", caption: "Carrera al frente", alt: "R6M22891 Enhanced NR btfphc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22892-Enhanced-NR_eueu5w.jpg", caption: "El marcador decide", alt: "R6M22892 Enhanced NR eueu5w" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22890-Enhanced-NR_gyf5b9.jpg", caption: "Pase largo", alt: "R6M22890 Enhanced NR gyf5b9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22889-Enhanced-NR_i24s83.jpg", caption: "Bloqueo perfecto", alt: "R6M22889 Enhanced NR i24s83" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22884-Enhanced-NR_oihifg.jpg", caption: "Festejo en equipo", alt: "R6M22884 Enhanced NR oihifg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22882-Enhanced-NR_dk07zh.jpg", caption: "Preparación pre-juego", alt: "R6M22882 Enhanced NR dk07zh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22880-Enhanced-NR_mnrmy8.jpg", caption: "El quarterback manda", alt: "R6M22880 Enhanced NR mnrmy8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22883-Enhanced-NR_l5wmwi.jpg", caption: "Final de temporada", alt: "R6M22883 Enhanced NR l5wmwi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22881-Enhanced-NR_uep9vp.jpg", caption: "Gran jugada", alt: "R6M22881 Enhanced NR uep9vp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22879-Enhanced-NR_soixl3.jpg", caption: "Sprint al end zone", alt: "R6M22879 Enhanced NR soixl3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22877-Enhanced-NR_ekyubw.jpg", caption: "Intercepción", alt: "R6M22877 Enhanced NR ekyubw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22878-Enhanced-NR_hrkvah.jpg", caption: "Zona de anotación", alt: "R6M22878 Enhanced NR hrkvah" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22876-Enhanced-NR_lewjia.jpg", caption: "Equipo Aguilas", alt: "R6M22876 Enhanced NR lewjia" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22874-Enhanced-NR_cg8djp.jpg", caption: "En el campo", alt: "R6M22874 Enhanced NR cg8djp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22875-Enhanced-NR_eiyrbq.jpg", caption: "Partido intenso", alt: "R6M22875 Enhanced NR eiyrbq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22873-Enhanced-NR_ci4kor.jpg", caption: "Victoria merecida", alt: "R6M22873 Enhanced NR ci4kor" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22872-Enhanced-NR_julcyh.jpg", caption: "Ataque imparable", alt: "R6M22872 Enhanced NR julcyh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22871-Enhanced-NR_biz7cj.jpg", caption: "Defensa cerrada", alt: "R6M22871 Enhanced NR biz7cj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22869-Enhanced-NR_psviel.jpg", caption: "Pase de touchdown", alt: "R6M22869 Enhanced NR psviel" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22870-Enhanced-NR_sqealq.jpg", caption: "Corrida de yarda", alt: "R6M22870 Enhanced NR sqealq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22868-Enhanced-NR_llbfav.jpg", caption: "Celebración del equipo", alt: "R6M22868 Enhanced NR llbfav" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22867-Enhanced-NR_wx9dy3.jpg", caption: "Juego en equipo", alt: "R6M22867 Enhanced NR wx9dy3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22866-Enhanced-NR_g6eozm.jpg", caption: "Jugada de ataque", alt: "R6M22866 Enhanced NR g6eozm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22864-Enhanced-NR_clzavz.jpg", caption: "Defensa en acción", alt: "R6M22864 Enhanced NR clzavz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22861-Enhanced-NR_kvsurf.jpg", caption: "¡Touchdown!", alt: "R6M22861 Enhanced NR kvsurf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22862-Enhanced-NR_rouc9d.jpg", caption: "Equipo unido", alt: "R6M22862 Enhanced NR rouc9d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22865-Enhanced-NR_ihx7ve.jpg", caption: "Carrera al frente", alt: "R6M22865 Enhanced NR ihx7ve" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22863-Enhanced-NR_khxlui.jpg", caption: "El marcador decide", alt: "R6M22863 Enhanced NR khxlui" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22860-Enhanced-NR_icw999.jpg", caption: "Pase largo", alt: "R6M22860 Enhanced NR icw999" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22859-Enhanced-NR_ga23tm.jpg", caption: "Bloqueo perfecto", alt: "R6M22859 Enhanced NR ga23tm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22858-Enhanced-NR_qwwsiy.jpg", caption: "Festejo en equipo", alt: "R6M22858 Enhanced NR qwwsiy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22857-Enhanced-NR_jbaqj4.jpg", caption: "Preparación pre-juego", alt: "R6M22857 Enhanced NR jbaqj4" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22856-Enhanced-NR_v7rnfq.jpg", caption: "El quarterback manda", alt: "R6M22856 Enhanced NR v7rnfq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22855-Enhanced-NR_na6r8o.jpg", caption: "Final de temporada", alt: "R6M22855 Enhanced NR na6r8o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22854-Enhanced-NR_kcycyd.jpg", caption: "Gran jugada", alt: "R6M22854 Enhanced NR kcycyd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22850-Enhanced-NR_eez5vn.jpg", caption: "Sprint al end zone", alt: "R6M22850 Enhanced NR eez5vn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22851-Enhanced-NR_jbugzf.jpg", caption: "Intercepción", alt: "R6M22851 Enhanced NR jbugzf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22852-Enhanced-NR_lycuc3.jpg", caption: "Zona de anotación", alt: "R6M22852 Enhanced NR lycuc3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22853-Enhanced-NR_js7flo.jpg", caption: "Equipo Aguilas", alt: "R6M22853 Enhanced NR js7flo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22849-Enhanced-NR_ytndg8.jpg", caption: "En el campo", alt: "R6M22849 Enhanced NR ytndg8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22848-Enhanced-NR_vegrxn.jpg", caption: "Partido intenso", alt: "R6M22848 Enhanced NR vegrxn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22847-Enhanced-NR_cszpjk.jpg", caption: "Victoria merecida", alt: "R6M22847 Enhanced NR cszpjk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22846-Enhanced-NR_g0ow9a.jpg", caption: "Ataque imparable", alt: "R6M22846 Enhanced NR g0ow9a" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22845-Enhanced-NR_vkwk1l.jpg", caption: "Defensa cerrada", alt: "R6M22845 Enhanced NR vkwk1l" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22844-Enhanced-NR_qyfmyc.jpg", caption: "Pase de touchdown", alt: "R6M22844 Enhanced NR qyfmyc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22843-Enhanced-NR_hgc3ky.jpg", caption: "Corrida de yarda", alt: "R6M22843 Enhanced NR hgc3ky" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22840-Enhanced-NR_gk3xot.jpg", caption: "Celebración del equipo", alt: "R6M22840 Enhanced NR gk3xot" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22839-Enhanced-NR_b118j3.jpg", caption: "Juego en equipo", alt: "R6M22839 Enhanced NR b118j3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22838-Enhanced-NR_k7yapa.jpg", caption: "Jugada de ataque", alt: "R6M22838 Enhanced NR k7yapa" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22841-Enhanced-NR_d48zeq.jpg", caption: "Defensa en acción", alt: "R6M22841 Enhanced NR d48zeq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22842-Enhanced-NR_gvcqti.jpg", caption: "¡Touchdown!", alt: "R6M22842 Enhanced NR gvcqti" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22837-Enhanced-NR_eheujt.jpg", caption: "Equipo unido", alt: "R6M22837 Enhanced NR eheujt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22836-Enhanced-NR_pvudy5.jpg", caption: "Carrera al frente", alt: "R6M22836 Enhanced NR pvudy5" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22835-Enhanced-NR_i4vmgm.jpg", caption: "El marcador decide", alt: "R6M22835 Enhanced NR i4vmgm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22833-Enhanced-NR_bekk2f.jpg", caption: "Pase largo", alt: "R6M22833 Enhanced NR bekk2f" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22834-Enhanced-NR_iobh0x.jpg", caption: "Bloqueo perfecto", alt: "R6M22834 Enhanced NR iobh0x" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22832-Enhanced-NR_ziqdgp.jpg", caption: "Festejo en equipo", alt: "R6M22832 Enhanced NR ziqdgp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22831-Enhanced-NR_glabtp.jpg", caption: "Preparación pre-juego", alt: "R6M22831 Enhanced NR glabtp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22829-Enhanced-NR_lgsv4p.jpg", caption: "El quarterback manda", alt: "R6M22829 Enhanced NR lgsv4p" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22830-Enhanced-NR_l1y3mv.jpg", caption: "Final de temporada", alt: "R6M22830 Enhanced NR l1y3mv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22826-Enhanced-NR_ofpp68.jpg", caption: "Gran jugada", alt: "R6M22826 Enhanced NR ofpp68" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22828-Enhanced-NR_fsaywl.jpg", caption: "Sprint al end zone", alt: "R6M22828 Enhanced NR fsaywl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22827-Enhanced-NR_fvpp39.jpg", caption: "Intercepción", alt: "R6M22827 Enhanced NR fvpp39" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22822-Enhanced-NR_l9r4c7.jpg", caption: "Zona de anotación", alt: "R6M22822 Enhanced NR l9r4c7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22825-Enhanced-NR_rkujs9.jpg", caption: "Equipo Aguilas", alt: "R6M22825 Enhanced NR rkujs9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22824-Enhanced-NR_oxttpy.jpg", caption: "En el campo", alt: "R6M22824 Enhanced NR oxttpy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22821-Enhanced-NR_vodgxv.jpg", caption: "Partido intenso", alt: "R6M22821 Enhanced NR vodgxv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22819-Enhanced-NR_fg0blj.jpg", caption: "Victoria merecida", alt: "R6M22819 Enhanced NR fg0blj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22823-Enhanced-NR_ehrodd.jpg", caption: "Ataque imparable", alt: "R6M22823 Enhanced NR ehrodd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22818-Enhanced-NR_cvuzmr.jpg", caption: "Defensa cerrada", alt: "R6M22818 Enhanced NR cvuzmr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22816-Enhanced-NR_thv5on.jpg", caption: "Pase de touchdown", alt: "R6M22816 Enhanced NR thv5on" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22820-Enhanced-NR_r4ldho.jpg", caption: "Corrida de yarda", alt: "R6M22820 Enhanced NR r4ldho" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22817-Enhanced-NR_fom1b0.jpg", caption: "Celebración del equipo", alt: "R6M22817 Enhanced NR fom1b0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22815-Enhanced-NR_qke91l.jpg", caption: "Juego en equipo", alt: "R6M22815 Enhanced NR qke91l" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22814-Enhanced-NR_ud5yqr.jpg", caption: "Jugada de ataque", alt: "R6M22814 Enhanced NR ud5yqr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22812-Enhanced-NR_ohbvsr.jpg", caption: "Defensa en acción", alt: "R6M22812 Enhanced NR ohbvsr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22813-Enhanced-NR_lkgaa4.jpg", caption: "¡Touchdown!", alt: "R6M22813 Enhanced NR lkgaa4" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22809-Enhanced-NR_kfz8m3.jpg", caption: "Equipo unido", alt: "R6M22809 Enhanced NR kfz8m3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22810-Enhanced-NR_sd6ql5.jpg", caption: "Carrera al frente", alt: "R6M22810 Enhanced NR sd6ql5" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22811-Enhanced-NR_xef0dv.jpg", caption: "El marcador decide", alt: "R6M22811 Enhanced NR xef0dv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22808-Enhanced-NR_zhibqe.jpg", caption: "Pase largo", alt: "R6M22808 Enhanced NR zhibqe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22805-Enhanced-NR_iqhlwm.jpg", caption: "Bloqueo perfecto", alt: "R6M22805 Enhanced NR iqhlwm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22807-Enhanced-NR_mswqih.jpg", caption: "Festejo en equipo", alt: "R6M22807 Enhanced NR mswqih" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22803-Enhanced-NR_xfuugw.jpg", caption: "Preparación pre-juego", alt: "R6M22803 Enhanced NR xfuugw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22806-Enhanced-NR_eihfzl.jpg", caption: "El quarterback manda", alt: "R6M22806 Enhanced NR eihfzl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22804-Enhanced-NR_bkqujb.jpg", caption: "Final de temporada", alt: "R6M22804 Enhanced NR bkqujb" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22802-Enhanced-NR_y7c3rs.jpg", caption: "Gran jugada", alt: "R6M22802 Enhanced NR y7c3rs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22801-Enhanced-NR_ohvbc1.jpg", caption: "Sprint al end zone", alt: "R6M22801 Enhanced NR ohvbc1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22800-Enhanced-NR_zqtahv.jpg", caption: "Intercepción", alt: "R6M22800 Enhanced NR zqtahv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22797-Enhanced-NR_nomrsf.jpg", caption: "Zona de anotación", alt: "R6M22797 Enhanced NR nomrsf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22799-Enhanced-NR_acktvt.jpg", caption: "Equipo Aguilas", alt: "R6M22799 Enhanced NR acktvt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22798-Enhanced-NR_ndbsy6.jpg", caption: "En el campo", alt: "R6M22798 Enhanced NR ndbsy6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22796-Enhanced-NR_tfdoq2.jpg", caption: "Partido intenso", alt: "R6M22796 Enhanced NR tfdoq2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22794-Enhanced-NR_owqjdi.jpg", caption: "Victoria merecida", alt: "R6M22794 Enhanced NR owqjdi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22795-Enhanced-NR_wj4ebm.jpg", caption: "Ataque imparable", alt: "R6M22795 Enhanced NR wj4ebm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22793-Enhanced-NR_m4zlts.jpg", caption: "Defensa cerrada", alt: "R6M22793 Enhanced NR m4zlts" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22792-Enhanced-NR_ktjevu.jpg", caption: "Pase de touchdown", alt: "R6M22792 Enhanced NR ktjevu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22791-Enhanced-NR_tcuy6r.jpg", caption: "Corrida de yarda", alt: "R6M22791 Enhanced NR tcuy6r" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22790-Enhanced-NR_clrlgz.jpg", caption: "Celebración del equipo", alt: "R6M22790 Enhanced NR clrlgz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22786-Enhanced-NR_gpjbvr.jpg", caption: "Juego en equipo", alt: "R6M22786 Enhanced NR gpjbvr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22789-Enhanced-NR_kiie8l.jpg", caption: "Jugada de ataque", alt: "R6M22789 Enhanced NR kiie8l" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22788-Enhanced-NR_o7knuq.jpg", caption: "Defensa en acción", alt: "R6M22788 Enhanced NR o7knuq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22787-Enhanced-NR_hvv9un.jpg", caption: "¡Touchdown!", alt: "R6M22787 Enhanced NR hvv9un" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22785-Enhanced-NR_t3bxgp.jpg", caption: "Equipo unido", alt: "R6M22785 Enhanced NR t3bxgp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22784-Enhanced-NR_zbxotd.jpg", caption: "Carrera al frente", alt: "R6M22784 Enhanced NR zbxotd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22783-Enhanced-NR_d9ox0c.jpg", caption: "El marcador decide", alt: "R6M22783 Enhanced NR d9ox0c" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22781-Enhanced-NR_pepnmy.jpg", caption: "Pase largo", alt: "R6M22781 Enhanced NR pepnmy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22779-Enhanced-NR_l2kacs.jpg", caption: "Bloqueo perfecto", alt: "R6M22779 Enhanced NR l2kacs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22780-Enhanced-NR_pokeby.jpg", caption: "Festejo en equipo", alt: "R6M22780 Enhanced NR pokeby" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22782-Enhanced-NR_twarms.jpg", caption: "Preparación pre-juego", alt: "R6M22782 Enhanced NR twarms" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22778-Enhanced-NR_hb2azl.jpg", caption: "El quarterback manda", alt: "R6M22778 Enhanced NR hb2azl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22777-Enhanced-NR_r54phu.jpg", caption: "Final de temporada", alt: "R6M22777 Enhanced NR r54phu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22773-Enhanced-NR_gm5eg0.jpg", caption: "Gran jugada", alt: "R6M22773 Enhanced NR gm5eg0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22776-Enhanced-NR_qvgosv.jpg", caption: "Sprint al end zone", alt: "R6M22776 Enhanced NR qvgosv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22774-Enhanced-NR_ps6i76.jpg", caption: "Intercepción", alt: "R6M22774 Enhanced NR ps6i76" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22771-Enhanced-NR_v4aobz.jpg", caption: "Zona de anotación", alt: "R6M22771 Enhanced NR v4aobz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22775-Enhanced-NR_erlwtx.jpg", caption: "Equipo Aguilas", alt: "R6M22775 Enhanced NR erlwtx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22772-Enhanced-NR_wzvn9o.jpg", caption: "En el campo", alt: "R6M22772 Enhanced NR wzvn9o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22769-Enhanced-NR_ndf8bn.jpg", caption: "Partido intenso", alt: "R6M22769 Enhanced NR ndf8bn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22770-Enhanced-NR_cpjqn6.jpg", caption: "Victoria merecida", alt: "R6M22770 Enhanced NR cpjqn6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22768-Enhanced-NR_e4mr7g.jpg", caption: "Ataque imparable", alt: "R6M22768 Enhanced NR e4mr7g" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22767-Enhanced-NR_lzqnyu.jpg", caption: "Defensa cerrada", alt: "R6M22767 Enhanced NR lzqnyu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22766-Enhanced-NR_cr9wyy.jpg", caption: "Pase de touchdown", alt: "R6M22766 Enhanced NR cr9wyy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22765-Enhanced-NR_mcoq4u.jpg", caption: "Corrida de yarda", alt: "R6M22765 Enhanced NR mcoq4u" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22764-Enhanced-NR_mdpkmj.jpg", caption: "Celebración del equipo", alt: "R6M22764 Enhanced NR mdpkmj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22763-Enhanced-NR_cc6okq.jpg", caption: "Juego en equipo", alt: "R6M22763 Enhanced NR cc6okq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22762-Enhanced-NR_qpcbwj.jpg", caption: "Jugada de ataque", alt: "R6M22762 Enhanced NR qpcbwj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22753-Enhanced-NR_garaat.jpg", caption: "Defensa en acción", alt: "R6M22753 Enhanced NR garaat" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22761-Enhanced-NR_jmv8kg.jpg", caption: "¡Touchdown!", alt: "R6M22761 Enhanced NR jmv8kg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22760-Enhanced-NR_jhz6ob.jpg", caption: "Equipo unido", alt: "R6M22760 Enhanced NR jhz6ob" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22759-Enhanced-NR_t9hnz0.jpg", caption: "Carrera al frente", alt: "R6M22759 Enhanced NR t9hnz0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22758-Enhanced-NR_wtzcmt.jpg", caption: "El marcador decide", alt: "R6M22758 Enhanced NR wtzcmt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22757-Enhanced-NR_kfued3.jpg", caption: "Pase largo", alt: "R6M22757 Enhanced NR kfued3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22756-Enhanced-NR_krevut.jpg", caption: "Bloqueo perfecto", alt: "R6M22756 Enhanced NR krevut" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22755-Enhanced-NR_yha2gk.jpg", caption: "Festejo en equipo", alt: "R6M22755 Enhanced NR yha2gk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22754-Enhanced-NR_aoanxf.jpg", caption: "Preparación pre-juego", alt: "R6M22754 Enhanced NR aoanxf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22750-Enhanced-NR_gejz8x.jpg", caption: "El quarterback manda", alt: "R6M22750 Enhanced NR gejz8x" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22752-Enhanced-NR_dkmsx2.jpg", caption: "Final de temporada", alt: "R6M22752 Enhanced NR dkmsx2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22751-Enhanced-NR_k5jyla.jpg", caption: "Gran jugada", alt: "R6M22751 Enhanced NR k5jyla" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22749-Enhanced-NR_kmlwyo.jpg", caption: "Sprint al end zone", alt: "R6M22749 Enhanced NR kmlwyo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22748-Enhanced-NR_lkni2d.jpg", caption: "Intercepción", alt: "R6M22748 Enhanced NR lkni2d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22747-Enhanced-NR_li3t7j.jpg", caption: "Zona de anotación", alt: "R6M22747 Enhanced NR li3t7j" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22746-Enhanced-NR_flam79.jpg", caption: "Equipo Aguilas", alt: "R6M22746 Enhanced NR flam79" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22744-Enhanced-NR_ix531e.jpg", caption: "En el campo", alt: "R6M22744 Enhanced NR ix531e" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22745-Enhanced-NR_u0cf3h.jpg", caption: "Partido intenso", alt: "R6M22745 Enhanced NR u0cf3h" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22743-Enhanced-NR_qyikgh.jpg", caption: "Victoria merecida", alt: "R6M22743 Enhanced NR qyikgh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22742-Enhanced-NR_dxd4e2.jpg", caption: "Ataque imparable", alt: "R6M22742 Enhanced NR dxd4e2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22741-Enhanced-NR_hxblmh.jpg", caption: "Defensa cerrada", alt: "R6M22741 Enhanced NR hxblmh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22740-Enhanced-NR_hfijkp.jpg", caption: "Pase de touchdown", alt: "R6M22740 Enhanced NR hfijkp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22739-Enhanced-NR_jxn7kw.jpg", caption: "Corrida de yarda", alt: "R6M22739 Enhanced NR jxn7kw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22738-Enhanced-NR_hj9y7a.jpg", caption: "Celebración del equipo", alt: "R6M22738 Enhanced NR hj9y7a" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22733-Enhanced-NR_zml2cq.jpg", caption: "Juego en equipo", alt: "R6M22733 Enhanced NR zml2cq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22732-Enhanced-NR_l0gokq.jpg", caption: "Jugada de ataque", alt: "R6M22732 Enhanced NR l0gokq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22731-Enhanced-NR_mpkcmg.jpg", caption: "Defensa en acción", alt: "R6M22731 Enhanced NR mpkcmg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22729-Enhanced-NR_qysupz.jpg", caption: "¡Touchdown!", alt: "R6M22729 Enhanced NR qysupz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22730-Enhanced-NR_llugp9.jpg", caption: "Equipo unido", alt: "R6M22730 Enhanced NR llugp9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22726-Enhanced-NR_k41jrt.jpg", caption: "Carrera al frente", alt: "R6M22726 Enhanced NR k41jrt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22724-Enhanced-NR_dzbxg2.jpg", caption: "El marcador decide", alt: "R6M22724 Enhanced NR dzbxg2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22728-Enhanced-NR_sjczvd.jpg", caption: "Pase largo", alt: "R6M22728 Enhanced NR sjczvd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22727-Enhanced-NR_qpcyiq.jpg", caption: "Bloqueo perfecto", alt: "R6M22727 Enhanced NR qpcyiq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22723-Enhanced-NR_dgce6r.jpg", caption: "Festejo en equipo", alt: "R6M22723 Enhanced NR dgce6r" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22725-Enhanced-NR_vpqwry.jpg", caption: "Preparación pre-juego", alt: "R6M22725 Enhanced NR vpqwry" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22722-Enhanced-NR_hpiaqr.jpg", caption: "El quarterback manda", alt: "R6M22722 Enhanced NR hpiaqr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22719-Enhanced-NR_espaum.jpg", caption: "Final de temporada", alt: "R6M22719 Enhanced NR espaum" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22721-Enhanced-NR_oqcsil.jpg", caption: "Gran jugada", alt: "R6M22721 Enhanced NR oqcsil" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22720-Enhanced-NR_t0nqli.jpg", caption: "Sprint al end zone", alt: "R6M22720 Enhanced NR t0nqli" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22718-Enhanced-NR_svexwi.jpg", caption: "Intercepción", alt: "R6M22718 Enhanced NR svexwi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22716-Enhanced-NR_boj4dc.jpg", caption: "Zona de anotación", alt: "R6M22716 Enhanced NR boj4dc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22717-Enhanced-NR_qizpsf.jpg", caption: "Equipo Aguilas", alt: "R6M22717 Enhanced NR qizpsf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22714-Enhanced-NR_jbruak.jpg", caption: "En el campo", alt: "R6M22714 Enhanced NR jbruak" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22715-Enhanced-NR_rza9ss.jpg", caption: "Partido intenso", alt: "R6M22715 Enhanced NR rza9ss" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22712-Enhanced-NR_tbozn6.jpg", caption: "Victoria merecida", alt: "R6M22712 Enhanced NR tbozn6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22713-Enhanced-NR_t5iqid.jpg", caption: "Ataque imparable", alt: "R6M22713 Enhanced NR t5iqid" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22711-Enhanced-NR_dm8ogw.jpg", caption: "Defensa cerrada", alt: "R6M22711 Enhanced NR dm8ogw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22708-Enhanced-NR_guh1cp.jpg", caption: "Pase de touchdown", alt: "R6M22708 Enhanced NR guh1cp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22707-Enhanced-NR_sthgpv.jpg", caption: "Corrida de yarda", alt: "R6M22707 Enhanced NR sthgpv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22710-Enhanced-NR_lfvcmi.jpg", caption: "Celebración del equipo", alt: "R6M22710 Enhanced NR lfvcmi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22709-Enhanced-NR_lhy6sh.jpg", caption: "Juego en equipo", alt: "R6M22709 Enhanced NR lhy6sh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22706-Enhanced-NR_s27afm.jpg", caption: "Jugada de ataque", alt: "R6M22706 Enhanced NR s27afm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22705-Enhanced-NR_t4uqfk.jpg", caption: "Defensa en acción", alt: "R6M22705 Enhanced NR t4uqfk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22703-Enhanced-NR_kusk1a.jpg", caption: "¡Touchdown!", alt: "R6M22703 Enhanced NR kusk1a" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22704-Enhanced-NR_cfvgtw.jpg", caption: "Equipo unido", alt: "R6M22704 Enhanced NR cfvgtw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22700-Enhanced-NR_vs6zso.jpg", caption: "Carrera al frente", alt: "R6M22700 Enhanced NR vs6zso" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22702-Enhanced-NR_nzjyx9.jpg", caption: "El marcador decide", alt: "R6M22702 Enhanced NR nzjyx9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22701-Enhanced-NR_pvdhwe.jpg", caption: "Pase largo", alt: "R6M22701 Enhanced NR pvdhwe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22699-Enhanced-NR_z2agkt.jpg", caption: "Bloqueo perfecto", alt: "R6M22699 Enhanced NR z2agkt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22697-Enhanced-NR_hjsmow.jpg", caption: "Festejo en equipo", alt: "R6M22697 Enhanced NR hjsmow" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22698-Enhanced-NR_hdodti.jpg", caption: "Preparación pre-juego", alt: "R6M22698 Enhanced NR hdodti" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22696-Enhanced-NR_nybui0.jpg", caption: "El quarterback manda", alt: "R6M22696 Enhanced NR nybui0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22695-Enhanced-NR_e9vqde.jpg", caption: "Final de temporada", alt: "R6M22695 Enhanced NR e9vqde" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22694-Enhanced-NR_cmsd0i.jpg", caption: "Gran jugada", alt: "R6M22694 Enhanced NR cmsd0i" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22693-Enhanced-NR_vnfgrs.jpg", caption: "Sprint al end zone", alt: "R6M22693 Enhanced NR vnfgrs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22691-Enhanced-NR_q6bwh5.jpg", caption: "Intercepción", alt: "R6M22691 Enhanced NR q6bwh5" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22690-Enhanced-NR_enexat.jpg", caption: "Zona de anotación", alt: "R6M22690 Enhanced NR enexat" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22692-Enhanced-NR_lp9gxv.jpg", caption: "Equipo Aguilas", alt: "R6M22692 Enhanced NR lp9gxv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22689-Enhanced-NR_wxsqty.jpg", caption: "En el campo", alt: "R6M22689 Enhanced NR wxsqty" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22688-Enhanced-NR_hrr828.jpg", caption: "Partido intenso", alt: "R6M22688 Enhanced NR hrr828" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22687-Enhanced-NR_tsmxxb.jpg", caption: "Victoria merecida", alt: "R6M22687 Enhanced NR tsmxxb" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22686-Enhanced-NR_kd28rc.jpg", caption: "Ataque imparable", alt: "R6M22686 Enhanced NR kd28rc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22682-Enhanced-NR_l6lpxg.jpg", caption: "Defensa cerrada", alt: "R6M22682 Enhanced NR l6lpxg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22679-Enhanced-NR_b1vdle.jpg", caption: "Pase de touchdown", alt: "R6M22679 Enhanced NR b1vdle" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22685-Enhanced-NR_opxgzw.jpg", caption: "Corrida de yarda", alt: "R6M22685 Enhanced NR opxgzw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22684-Enhanced-NR_dkxzul.jpg", caption: "Celebración del equipo", alt: "R6M22684 Enhanced NR dkxzul" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22681-Enhanced-NR_efgpe9.jpg", caption: "Juego en equipo", alt: "R6M22681 Enhanced NR efgpe9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22683-Enhanced-NR_um9tmd.jpg", caption: "Jugada de ataque", alt: "R6M22683 Enhanced NR um9tmd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22680-Enhanced-NR_ubvygv.jpg", caption: "Defensa en acción", alt: "R6M22680 Enhanced NR ubvygv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22678-Enhanced-NR_mlfmgy.jpg", caption: "¡Touchdown!", alt: "R6M22678 Enhanced NR mlfmgy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22677-Enhanced-NR_iil4x1.jpg", caption: "Equipo unido", alt: "R6M22677 Enhanced NR iil4x1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22675-Enhanced-NR_rqpf7p.jpg", caption: "Carrera al frente", alt: "R6M22675 Enhanced NR rqpf7p" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22676-Enhanced-NR_luh0qw.jpg", caption: "El marcador decide", alt: "R6M22676 Enhanced NR luh0qw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22674-Enhanced-NR_dyq90p.jpg", caption: "Pase largo", alt: "R6M22674 Enhanced NR dyq90p" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22673-Enhanced-NR_wsf22d.jpg", caption: "Bloqueo perfecto", alt: "R6M22673 Enhanced NR wsf22d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22672-Enhanced-NR_hsbjk7.jpg", caption: "Festejo en equipo", alt: "R6M22672 Enhanced NR hsbjk7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22671-Enhanced-NR_r8o4hn.jpg", caption: "Preparación pre-juego", alt: "R6M22671 Enhanced NR r8o4hn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22669-Enhanced-NR_g9jjii.jpg", caption: "El quarterback manda", alt: "R6M22669 Enhanced NR g9jjii" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22670-Enhanced-NR_cmwbxq.jpg", caption: "Final de temporada", alt: "R6M22670 Enhanced NR cmwbxq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22668-Enhanced-NR_jcrccv.jpg", caption: "Gran jugada", alt: "R6M22668 Enhanced NR jcrccv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22667-Enhanced-NR_lbfnqc.jpg", caption: "Sprint al end zone", alt: "R6M22667 Enhanced NR lbfnqc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22665-Enhanced-NR_oq4hwy.jpg", caption: "Intercepción", alt: "R6M22665 Enhanced NR oq4hwy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22666-Enhanced-NR_rnmruy.jpg", caption: "Zona de anotación", alt: "R6M22666 Enhanced NR rnmruy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22664-Enhanced-NR_w3f9m7.jpg", caption: "Equipo Aguilas", alt: "R6M22664 Enhanced NR w3f9m7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22662-Enhanced-NR_i7pist.jpg", caption: "En el campo", alt: "R6M22662 Enhanced NR i7pist" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22659-Enhanced-NR_zkf049.jpg", caption: "Partido intenso", alt: "R6M22659 Enhanced NR zkf049" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22663-Enhanced-NR_bzyc7v.jpg", caption: "Victoria merecida", alt: "R6M22663 Enhanced NR bzyc7v" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22658-Enhanced-NR_b5inaj.jpg", caption: "Ataque imparable", alt: "R6M22658 Enhanced NR b5inaj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22661-Enhanced-NR_qmacox.jpg", caption: "Defensa cerrada", alt: "R6M22661 Enhanced NR qmacox" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22660-Enhanced-NR_k5krpb.jpg", caption: "Pase de touchdown", alt: "R6M22660 Enhanced NR k5krpb" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22657-Enhanced-NR_sgpl0d.jpg", caption: "Corrida de yarda", alt: "R6M22657 Enhanced NR sgpl0d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22656-Enhanced-NR_v2xdpj.jpg", caption: "Celebración del equipo", alt: "R6M22656 Enhanced NR v2xdpj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22655-Enhanced-NR_l06hvo.jpg", caption: "Juego en equipo", alt: "R6M22655 Enhanced NR l06hvo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22654-Enhanced-NR_m0n1bq.jpg", caption: "Jugada de ataque", alt: "R6M22654 Enhanced NR m0n1bq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22653-Enhanced-NR_uax8qr.jpg", caption: "Defensa en acción", alt: "R6M22653 Enhanced NR uax8qr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22652-Enhanced-NR_b2cds7.jpg", caption: "¡Touchdown!", alt: "R6M22652 Enhanced NR b2cds7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22651-Enhanced-NR_tjpchd.jpg", caption: "Equipo unido", alt: "R6M22651 Enhanced NR tjpchd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22650-Enhanced-NR_zy90ib.jpg", caption: "Carrera al frente", alt: "R6M22650 Enhanced NR zy90ib" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22649-Enhanced-NR_oft7bv.jpg", caption: "El marcador decide", alt: "R6M22649 Enhanced NR oft7bv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22646-Enhanced-NR_ecu76b.jpg", caption: "Pase largo", alt: "R6M22646 Enhanced NR ecu76b" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22647-Enhanced-NR_suuooe.jpg", caption: "Bloqueo perfecto", alt: "R6M22647 Enhanced NR suuooe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22648-Enhanced-NR_mll7xc.jpg", caption: "Festejo en equipo", alt: "R6M22648 Enhanced NR mll7xc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22645-Enhanced-NR_rc8s0h.jpg", caption: "Preparación pre-juego", alt: "R6M22645 Enhanced NR rc8s0h" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22642-Enhanced-NR_rxzorn.jpg", caption: "El quarterback manda", alt: "R6M22642 Enhanced NR rxzorn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22644-Enhanced-NR_aoz3br.jpg", caption: "Final de temporada", alt: "R6M22644 Enhanced NR aoz3br" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22643-Enhanced-NR_qndx3q.jpg", caption: "Gran jugada", alt: "R6M22643 Enhanced NR qndx3q" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22641-Enhanced-NR_gll98x.jpg", caption: "Sprint al end zone", alt: "R6M22641 Enhanced NR gll98x" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22637-Enhanced-NR_gde5r2.jpg", caption: "Intercepción", alt: "R6M22637 Enhanced NR gde5r2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22639-Enhanced-NR_wfzakp.jpg", caption: "Zona de anotación", alt: "R6M22639 Enhanced NR wfzakp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22636-Enhanced-NR_uf7r5t.jpg", caption: "Equipo Aguilas", alt: "R6M22636 Enhanced NR uf7r5t" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22635-Enhanced-NR_ns1jvp.jpg", caption: "En el campo", alt: "R6M22635 Enhanced NR ns1jvp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22634-Enhanced-NR_hrliam.jpg", caption: "Partido intenso", alt: "R6M22634 Enhanced NR hrliam" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22632-Enhanced-NR_bqkkvy.jpg", caption: "Victoria merecida", alt: "R6M22632 Enhanced NR bqkkvy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22633-Enhanced-NR_q2qsd9.jpg", caption: "Ataque imparable", alt: "R6M22633 Enhanced NR q2qsd9" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22631-Enhanced-NR_ggjvpv.jpg", caption: "Defensa cerrada", alt: "R6M22631 Enhanced NR ggjvpv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22630-Enhanced-NR_fit6lw.jpg", caption: "Pase de touchdown", alt: "R6M22630 Enhanced NR fit6lw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22629-Enhanced-NR_dbfrpo.jpg", caption: "Corrida de yarda", alt: "R6M22629 Enhanced NR dbfrpo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22624-Enhanced-NR_pv0z4r.jpg", caption: "Celebración del equipo", alt: "R6M22624 Enhanced NR pv0z4r" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22627-Enhanced-NR_h1oboe.jpg", caption: "Juego en equipo", alt: "R6M22627 Enhanced NR h1oboe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22628-Enhanced-NR_uf1wyr.jpg", caption: "Jugada de ataque", alt: "R6M22628 Enhanced NR uf1wyr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22626-Enhanced-NR_tetnow.jpg", caption: "Defensa en acción", alt: "R6M22626 Enhanced NR tetnow" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22625-Enhanced-NR_x1i4yw.jpg", caption: "¡Touchdown!", alt: "R6M22625 Enhanced NR x1i4yw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22623-Enhanced-NR_r3mqxc.jpg", caption: "Equipo unido", alt: "R6M22623 Enhanced NR r3mqxc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22621-Enhanced-NR_sgtauf.jpg", caption: "Carrera al frente", alt: "R6M22621 Enhanced NR sgtauf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22620-Enhanced-NR_tykbtt.jpg", caption: "El marcador decide", alt: "R6M22620 Enhanced NR tykbtt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22622-Enhanced-NR_fohhnk.jpg", caption: "Pase largo", alt: "R6M22622 Enhanced NR fohhnk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22619-Enhanced-NR_vp5nbd.jpg", caption: "Bloqueo perfecto", alt: "R6M22619 Enhanced NR vp5nbd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22617-Enhanced-NR_xnyy0j.jpg", caption: "Festejo en equipo", alt: "R6M22617 Enhanced NR xnyy0j" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22618-Enhanced-NR_e8seso.jpg", caption: "Preparación pre-juego", alt: "R6M22618 Enhanced NR e8seso" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22616-Enhanced-NR_kcvc3a.jpg", caption: "El quarterback manda", alt: "R6M22616 Enhanced NR kcvc3a" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22615-Enhanced-NR_ahnb95.jpg", caption: "Final de temporada", alt: "R6M22615 Enhanced NR ahnb95" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22614-Enhanced-NR_mfc1fz.jpg", caption: "Gran jugada", alt: "R6M22614 Enhanced NR mfc1fz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22610-Enhanced-NR_c6twp2.jpg", caption: "Sprint al end zone", alt: "R6M22610 Enhanced NR c6twp2" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22612-Enhanced-NR_psuzzf.jpg", caption: "Intercepción", alt: "R6M22612 Enhanced NR psuzzf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22613-Enhanced-NR_so5nkg.jpg", caption: "Zona de anotación", alt: "R6M22613 Enhanced NR so5nkg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22611-Enhanced-NR_m6hzeh.jpg", caption: "Equipo Aguilas", alt: "R6M22611 Enhanced NR m6hzeh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22609-Enhanced-NR_ns9n97.jpg", caption: "En el campo", alt: "R6M22609 Enhanced NR ns9n97" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22608-Enhanced-NR_d7nujy.jpg", caption: "Partido intenso", alt: "R6M22608 Enhanced NR d7nujy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22607-Enhanced-NR_xupm1b.jpg", caption: "Victoria merecida", alt: "R6M22607 Enhanced NR xupm1b" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22604-Enhanced-NR_uofsgs.jpg", caption: "Ataque imparable", alt: "R6M22604 Enhanced NR uofsgs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22606-Enhanced-NR_bh1bae.jpg", caption: "Defensa cerrada", alt: "R6M22606 Enhanced NR bh1bae" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22605-Enhanced-NR_gmuv9l.jpg", caption: "Pase de touchdown", alt: "R6M22605 Enhanced NR gmuv9l" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22603-Enhanced-NR_hdj2z7.jpg", caption: "Corrida de yarda", alt: "R6M22603 Enhanced NR hdj2z7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22599-Enhanced-NR_jqblxe.jpg", caption: "Celebración del equipo", alt: "R6M22599 Enhanced NR jqblxe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22601-Enhanced-NR_hqbc46.jpg", caption: "Juego en equipo", alt: "R6M22601 Enhanced NR hqbc46" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22602-Enhanced-NR_wdj19k.jpg", caption: "Jugada de ataque", alt: "R6M22602 Enhanced NR wdj19k" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22598-Enhanced-NR_xalomj.jpg", caption: "Defensa en acción", alt: "R6M22598 Enhanced NR xalomj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22597-Enhanced-NR_uvcyo7.jpg", caption: "¡Touchdown!", alt: "R6M22597 Enhanced NR uvcyo7" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22596-Enhanced-NR_c6ownh.jpg", caption: "Equipo unido", alt: "R6M22596 Enhanced NR c6ownh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22595-Enhanced-NR_ekwdbc.jpg", caption: "Carrera al frente", alt: "R6M22595 Enhanced NR ekwdbc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22594-Enhanced-NR_ow1bcj.jpg", caption: "El marcador decide", alt: "R6M22594 Enhanced NR ow1bcj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22592-Enhanced-NR_bgypoa.jpg", caption: "Pase largo", alt: "R6M22592 Enhanced NR bgypoa" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22593-Enhanced-NR_iizxcm.jpg", caption: "Bloqueo perfecto", alt: "R6M22593 Enhanced NR iizxcm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22591-Enhanced-NR_heyhg1.jpg", caption: "Festejo en equipo", alt: "R6M22591 Enhanced NR heyhg1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22590-Enhanced-NR_vqifox.jpg", caption: "Preparación pre-juego", alt: "R6M22590 Enhanced NR vqifox" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22589-Enhanced-NR_hgii1w.jpg", caption: "El quarterback manda", alt: "R6M22589 Enhanced NR hgii1w" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22586-Enhanced-NR_oiybrg.jpg", caption: "Final de temporada", alt: "R6M22586 Enhanced NR oiybrg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22585-Enhanced-NR_or7tks.jpg", caption: "Gran jugada", alt: "R6M22585 Enhanced NR or7tks" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22583-Enhanced-NR_bcjd0x.jpg", caption: "Sprint al end zone", alt: "R6M22583 Enhanced NR bcjd0x" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22584-Enhanced-NR_tb7fvu.jpg", caption: "Intercepción", alt: "R6M22584 Enhanced NR tb7fvu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22582-Enhanced-NR_eh80ru.jpg", caption: "Zona de anotación", alt: "R6M22582 Enhanced NR eh80ru" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22581-Enhanced-NR_sqfpgf.jpg", caption: "Equipo Aguilas", alt: "R6M22581 Enhanced NR sqfpgf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22580-Enhanced-NR_mlmeee.jpg", caption: "En el campo", alt: "R6M22580 Enhanced NR mlmeee" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22577-Enhanced-NR_vtkdvw.jpg", caption: "Partido intenso", alt: "R6M22577 Enhanced NR vtkdvw" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22579-Enhanced-NR_ymjagv.jpg", caption: "Victoria merecida", alt: "R6M22579 Enhanced NR ymjagv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22575-Enhanced-NR_aq7a8z.jpg", caption: "Ataque imparable", alt: "R6M22575 Enhanced NR aq7a8z" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22578-Enhanced-NR_wn0ldg.jpg", caption: "Defensa cerrada", alt: "R6M22578 Enhanced NR wn0ldg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22576-Enhanced-NR_gcd4h3.jpg", caption: "Pase de touchdown", alt: "R6M22576 Enhanced NR gcd4h3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22566-Enhanced-NR_so1um0.jpg", caption: "Corrida de yarda", alt: "R6M22566 Enhanced NR so1um0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22574-Enhanced-NR_mahvcx.jpg", caption: "Celebración del equipo", alt: "R6M22574 Enhanced NR mahvcx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22573-Enhanced-NR_yfsx6d.jpg", caption: "Juego en equipo", alt: "R6M22573 Enhanced NR yfsx6d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22571-Enhanced-NR_qnhyku.jpg", caption: "Jugada de ataque", alt: "R6M22571 Enhanced NR qnhyku" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22572-Enhanced-NR_rmqauo.jpg", caption: "Defensa en acción", alt: "R6M22572 Enhanced NR rmqauo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22570-Enhanced-NR_o8loek.jpg", caption: "¡Touchdown!", alt: "R6M22570 Enhanced NR o8loek" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22569-Enhanced-NR_f2zef6.jpg", caption: "Equipo unido", alt: "R6M22569 Enhanced NR f2zef6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22568-Enhanced-NR_d16qwy.jpg", caption: "Carrera al frente", alt: "R6M22568 Enhanced NR d16qwy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22567-Enhanced-NR_mmcqnm.jpg", caption: "El marcador decide", alt: "R6M22567 Enhanced NR mmcqnm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22564-Enhanced-NR_uginxs.jpg", caption: "Pase largo", alt: "R6M22564 Enhanced NR uginxs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22565-Enhanced-NR_m5eb4w.jpg", caption: "Bloqueo perfecto", alt: "R6M22565 Enhanced NR m5eb4w" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22561-Enhanced-NR_v8ldxk.jpg", caption: "Festejo en equipo", alt: "R6M22561 Enhanced NR v8ldxk" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22560-Enhanced-NR_qe6ljg.jpg", caption: "Preparación pre-juego", alt: "R6M22560 Enhanced NR qe6ljg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22563-Enhanced-NR_u7ryay.jpg", caption: "El quarterback manda", alt: "R6M22563 Enhanced NR u7ryay" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22562-Enhanced-NR_tlhwhx.jpg", caption: "Final de temporada", alt: "R6M22562 Enhanced NR tlhwhx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22558-Enhanced-NR_ntx1bu.jpg", caption: "Gran jugada", alt: "R6M22558 Enhanced NR ntx1bu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22559-Enhanced-NR_eldtqi.jpg", caption: "Sprint al end zone", alt: "R6M22559 Enhanced NR eldtqi" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22557-Enhanced-NR_au7xdn.jpg", caption: "Intercepción", alt: "R6M22557 Enhanced NR au7xdn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22555-Enhanced-NR_j2ii4l.jpg", caption: "Zona de anotación", alt: "R6M22555 Enhanced NR j2ii4l" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22556-Enhanced-NR_vgipvr.jpg", caption: "Equipo Aguilas", alt: "R6M22556 Enhanced NR vgipvr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22554-Enhanced-NR_vaaywt.jpg", caption: "En el campo", alt: "R6M22554 Enhanced NR vaaywt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22553-Enhanced-NR_t9ycoa.jpg", caption: "Partido intenso", alt: "R6M22553 Enhanced NR t9ycoa" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22552-Enhanced-NR_s53msu.jpg", caption: "Victoria merecida", alt: "R6M22552 Enhanced NR s53msu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22551-Enhanced-NR_lmpv0c.jpg", caption: "Ataque imparable", alt: "R6M22551 Enhanced NR lmpv0c" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22547-Enhanced-NR_drazpq.jpg", caption: "Defensa cerrada", alt: "R6M22547 Enhanced NR drazpq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22550-Enhanced-NR_vqvftv.jpg", caption: "Pase de touchdown", alt: "R6M22550 Enhanced NR vqvftv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22549-Enhanced-NR_kdcarl.jpg", caption: "Corrida de yarda", alt: "R6M22549 Enhanced NR kdcarl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22548-Enhanced-NR_b0lt0e.jpg", caption: "Celebración del equipo", alt: "R6M22548 Enhanced NR b0lt0e" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22545-Enhanced-NR_bbutoh.jpg", caption: "Juego en equipo", alt: "R6M22545 Enhanced NR bbutoh" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22542-Enhanced-NR_w9pr6e.jpg", caption: "Jugada de ataque", alt: "R6M22542 Enhanced NR w9pr6e" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22546-Enhanced-NR_maqteq.jpg", caption: "Defensa en acción", alt: "R6M22546 Enhanced NR maqteq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22544-Enhanced-NR_nchekd.jpg", caption: "¡Touchdown!", alt: "R6M22544 Enhanced NR nchekd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22543-Enhanced-NR_nqjrqu.jpg", caption: "Equipo unido", alt: "R6M22543 Enhanced NR nqjrqu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22541-Enhanced-NR_k8v72p.jpg", caption: "Carrera al frente", alt: "R6M22541 Enhanced NR k8v72p" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22540-Enhanced-NR_mtt0u1.jpg", caption: "El marcador decide", alt: "R6M22540 Enhanced NR mtt0u1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22539-Enhanced-NR_ntvkxq.jpg", caption: "Pase largo", alt: "R6M22539 Enhanced NR ntvkxq" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22538-Enhanced-NR_ythj6w.jpg", caption: "Bloqueo perfecto", alt: "R6M22538 Enhanced NR ythj6w" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22537-Enhanced-NR_ral6wo.jpg", caption: "Festejo en equipo", alt: "R6M22537 Enhanced NR ral6wo" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22533-Enhanced-NR_ipc05w.jpg", caption: "Preparación pre-juego", alt: "R6M22533 Enhanced NR ipc05w" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22534-Enhanced-NR_dcwo4f.jpg", caption: "El quarterback manda", alt: "R6M22534 Enhanced NR dcwo4f" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22535-Enhanced-NR_inejlc.jpg", caption: "Final de temporada", alt: "R6M22535 Enhanced NR inejlc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22536-Enhanced-NR_yjitrt.jpg", caption: "Gran jugada", alt: "R6M22536 Enhanced NR yjitrt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22531-Enhanced-NR_loyrdf.jpg", caption: "Sprint al end zone", alt: "R6M22531 Enhanced NR loyrdf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22532-Enhanced-NR_w6czkv.jpg", caption: "Intercepción", alt: "R6M22532 Enhanced NR w6czkv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22530-Enhanced-NR_avdhds.jpg", caption: "Zona de anotación", alt: "R6M22530 Enhanced NR avdhds" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22529-Enhanced-NR_kgv5ks.jpg", caption: "Equipo Aguilas", alt: "R6M22529 Enhanced NR kgv5ks" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22528-Enhanced-NR_xgdwbc.jpg", caption: "En el campo", alt: "R6M22528 Enhanced NR xgdwbc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22527-Enhanced-NR_adfxhy.jpg", caption: "Partido intenso", alt: "R6M22527 Enhanced NR adfxhy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22525-Enhanced-NR_cgeu03.jpg", caption: "Victoria merecida", alt: "R6M22525 Enhanced NR cgeu03" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22526-Enhanced-NR_vizud6.jpg", caption: "Ataque imparable", alt: "R6M22526 Enhanced NR vizud6" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22524-Enhanced-NR_d0gnmj.jpg", caption: "Defensa cerrada", alt: "R6M22524 Enhanced NR d0gnmj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22523-Enhanced-NR_zfbonc.jpg", caption: "Pase de touchdown", alt: "R6M22523 Enhanced NR zfbonc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22522-Enhanced-NR_vzxbft.jpg", caption: "Corrida de yarda", alt: "R6M22522 Enhanced NR vzxbft" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22521-Enhanced-NR_w2ukyt.jpg", caption: "Celebración del equipo", alt: "R6M22521 Enhanced NR w2ukyt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22518-Enhanced-NR_zz1tbs.jpg", caption: "Juego en equipo", alt: "R6M22518 Enhanced NR zz1tbs" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22519-Enhanced-NR_o2jno0.jpg", caption: "Jugada de ataque", alt: "R6M22519 Enhanced NR o2jno0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22520-Enhanced-NR_ufouey.jpg", caption: "Defensa en acción", alt: "R6M22520 Enhanced NR ufouey" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22517-Enhanced-NR_u2feyd.jpg", caption: "¡Touchdown!", alt: "R6M22517 Enhanced NR u2feyd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22516-Enhanced-NR_geggbg.jpg", caption: "Equipo unido", alt: "R6M22516 Enhanced NR geggbg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22515-Enhanced-NR_zoxnae.jpg", caption: "Carrera al frente", alt: "R6M22515 Enhanced NR zoxnae" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22513-Enhanced-NR_julgxr.jpg", caption: "El marcador decide", alt: "R6M22513 Enhanced NR julgxr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22514-Enhanced-NR_riilgj.jpg", caption: "Pase largo", alt: "R6M22514 Enhanced NR riilgj" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22512-Enhanced-NR_f0qgj8.jpg", caption: "Bloqueo perfecto", alt: "R6M22512 Enhanced NR f0qgj8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22511-Enhanced-NR_ivn6lu.jpg", caption: "Festejo en equipo", alt: "R6M22511 Enhanced NR ivn6lu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22509-Enhanced-NR_a0szac.jpg", caption: "Preparación pre-juego", alt: "R6M22509 Enhanced NR a0szac" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22510-Enhanced-NR_nxsxct.jpg", caption: "El quarterback manda", alt: "R6M22510 Enhanced NR nxsxct" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22508-Enhanced-NR_nr489d.jpg", caption: "Final de temporada", alt: "R6M22508 Enhanced NR nr489d" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22506-Enhanced-NR_jhpr2m.jpg", caption: "Gran jugada", alt: "R6M22506 Enhanced NR jhpr2m" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22507-Enhanced-NR_qymdip.jpg", caption: "Sprint al end zone", alt: "R6M22507 Enhanced NR qymdip" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22505-Enhanced-NR_byx7xx.jpg", caption: "Intercepción", alt: "R6M22505 Enhanced NR byx7xx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22501-Enhanced-NR_gnnigm.jpg", caption: "Zona de anotación", alt: "R6M22501 Enhanced NR gnnigm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22503-Enhanced-NR_eq1bcy.jpg", caption: "Equipo Aguilas", alt: "R6M22503 Enhanced NR eq1bcy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22504-Enhanced-NR_hercnu.jpg", caption: "En el campo", alt: "R6M22504 Enhanced NR hercnu" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22502-Enhanced-NR_qjlsau.jpg", caption: "Partido intenso", alt: "R6M22502 Enhanced NR qjlsau" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22500-Enhanced-NR_hwppta.jpg", caption: "Victoria merecida", alt: "R6M22500 Enhanced NR hwppta" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22498-Enhanced-NR_vh73fm.jpg", caption: "Ataque imparable", alt: "R6M22498 Enhanced NR vh73fm" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22496-Enhanced-NR_ey9okg.jpg", caption: "Defensa cerrada", alt: "R6M22496 Enhanced NR ey9okg" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22493-Enhanced-NR_caehvl.jpg", caption: "Pase de touchdown", alt: "R6M22493 Enhanced NR caehvl" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22497-Enhanced-NR_qrponn.jpg", caption: "Corrida de yarda", alt: "R6M22497 Enhanced NR qrponn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22495-Enhanced-NR_z79vcc.jpg", caption: "Celebración del equipo", alt: "R6M22495 Enhanced NR z79vcc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22494-Enhanced-NR_ez2fy8.jpg", caption: "Juego en equipo", alt: "R6M22494 Enhanced NR ez2fy8" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22492-Enhanced-NR_wttjpe.jpg", caption: "Jugada de ataque", alt: "R6M22492 Enhanced NR wttjpe" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22491-Enhanced-NR_nb4txp.jpg", caption: "Defensa en acción", alt: "R6M22491 Enhanced NR nb4txp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22490-Enhanced-NR_v9zho4.jpg", caption: "¡Touchdown!", alt: "R6M22490 Enhanced NR v9zho4" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22489-Enhanced-NR_lnr6sx.jpg", caption: "Equipo unido", alt: "R6M22489 Enhanced NR lnr6sx" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22488-Enhanced-NR_brd9pp.jpg", caption: "Carrera al frente", alt: "R6M22488 Enhanced NR brd9pp" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22487-Enhanced-NR_yxxrou.jpg", caption: "El marcador decide", alt: "R6M22487 Enhanced NR yxxrou" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22486-Enhanced-NR_i55o3o.jpg", caption: "Pase largo", alt: "R6M22486 Enhanced NR i55o3o" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22485-Enhanced-NR_o5xdh3.jpg", caption: "Bloqueo perfecto", alt: "R6M22485 Enhanced NR o5xdh3" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22484-Enhanced-NR_jcwpcd.jpg", caption: "Festejo en equipo", alt: "R6M22484 Enhanced NR jcwpcd" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22483-Enhanced-NR_vcn2kn.jpg", caption: "Preparación pre-juego", alt: "R6M22483 Enhanced NR vcn2kn" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22481-Enhanced-NR_b1vg0n.jpg", caption: "El quarterback manda", alt: "R6M22481 Enhanced NR b1vg0n" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22482-Enhanced-NR_q6vi7x.jpg", caption: "Final de temporada", alt: "R6M22482 Enhanced NR q6vi7x" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22480-Enhanced-NR_lrqmoy.jpg", caption: "Gran jugada", alt: "R6M22480 Enhanced NR lrqmoy" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22479-Enhanced-NR_ih8frv.jpg", caption: "Sprint al end zone", alt: "R6M22479 Enhanced NR ih8frv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22478-Enhanced-NR_kzrn5m.jpg", caption: "Intercepción", alt: "R6M22478 Enhanced NR kzrn5m" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22469-Enhanced-NR_hltesc.jpg", caption: "Zona de anotación", alt: "R6M22469 Enhanced NR hltesc" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22471-Enhanced-NR_j39tkf.jpg", caption: "Equipo Aguilas", alt: "R6M22471 Enhanced NR j39tkf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22477-Enhanced-NR_ywdhph.jpg", caption: "En el campo", alt: "R6M22477 Enhanced NR ywdhph" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22470-Enhanced-NR_ag1mzf.jpg", caption: "Partido intenso", alt: "R6M22470 Enhanced NR ag1mzf" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22468-Enhanced-NR_un3bbz.jpg", caption: "Victoria merecida", alt: "R6M22468 Enhanced NR un3bbz" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22466-Enhanced-NR_ciiodr.jpg", caption: "Ataque imparable", alt: "R6M22466 Enhanced NR ciiodr" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22465-Enhanced-NR_ovq0zv.jpg", caption: "Defensa cerrada", alt: "R6M22465 Enhanced NR ovq0zv" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22475-Enhanced-NR_grusa1.jpg", caption: "Pase de touchdown", alt: "R6M22475 Enhanced NR grusa1" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22476-Enhanced-NR_eqmsgt.jpg", caption: "Corrida de yarda", alt: "R6M22476 Enhanced NR eqmsgt" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22464-Enhanced-NR_fzzms0.jpg", caption: "Celebración del equipo", alt: "R6M22464 Enhanced NR fzzms0" },
  { src: "https://res.cloudinary.com/dc9a2ifat/image/upload/q_auto,f_auto/R6M22463-Enhanced-NR_f1qxup.jpg", caption: "Juego en equipo", alt: "R6M22463 Enhanced NR f1qxup" },
];

/* ─────────────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────────────── */
const grid = document.getElementById('gallery-grid');

function buildGallery() {
  if (!PHOTOS.length) {
    document.getElementById('gallery-empty').style.display = 'block';
    return;
  }

  PHOTOS.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.index = i;

    const img = document.createElement('img');
    img.alt   = photo.alt || photo.caption;
    img.src   = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E';
    img.dataset.src = photo.src;
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    overlay.innerHTML = `<span class="card-caption">${photo.caption}</span>`;

    card.append(img, overlay);
    card.addEventListener('click', () => openLightbox(i));
    grid.appendChild(card);
  });

  initLazyLoad();
  initReveal();
}

/* ─ Lazy Loading ─ */
function initLazyLoad() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target.querySelector('img[data-src]');
      if (img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      io.unobserve(entry.target);
    });
  }, { rootMargin: '300px' });

  grid.querySelectorAll('.photo-card').forEach(c => io.observe(c));
}

/* ─ Scroll Reveal ─ */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  grid.querySelectorAll('.photo-card').forEach(c => io.observe(c));
}

/* ─────────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImage   = document.getElementById('lb-image');
const lbCaption = document.getElementById('lb-caption');
const lbCounter = document.getElementById('lb-counter');
let current = 0;

function openLightbox(index) {
  current = index;
  showPhoto();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showPhoto() {
  const photo = PHOTOS[current];
  lbImage.classList.add('fading');
  setTimeout(() => {
    lbImage.src = photo.src;
    lbCaption.textContent = photo.caption;
    lbCounter.textContent = `${current + 1} / ${PHOTOS.length}`;
    lbImage.onload = () => lbImage.classList.remove('fading');
    if (lbImage.complete) lbImage.classList.remove('fading');
  }, 150);
}

function prev() { current = (current - 1 + PHOTOS.length) % PHOTOS.length; showPhoto(); }
function next() { current = (current + 1) % PHOTOS.length; showPhoto(); }

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-backdrop').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', (e) => { e.stopPropagation(); prev(); });
document.getElementById('lb-next').addEventListener('click', (e) => { e.stopPropagation(); next(); });

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prev();
  if (e.key === 'ArrowRight') next();
});

// Touch / swipe support
let touchX = 0;
lightbox.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
});

/* ─────────────────────────────────────────────────────────────
   HEADER — scroll state
───────────────────────────────────────────────────────────── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─────────────────────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────────────────────── */
document.getElementById('burger')?.addEventListener('click', () => {
  document.querySelector('.header-nav').classList.toggle('open');
});

/* ─────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────── */
buildGallery();
