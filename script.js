// Form dan Perhitungan BMI ===============================================================================

    // dengan class harus menggunakan for untuk memetakan tiap tiap class
    var buttonCek = document.getElementsByClassName('cekFormBMI');
    for (let i = 0; i < buttonCek.length; i++) {

        // button yang dipetakan jika diberi input jalankan function
        buttonCek[i].addEventListener("input",function () {

            // ambil data
            tb = document.getElementById('tinggiBadanBMI').value;
            bb = document.getElementById('beratBadanBMI').value;

            // cek form terisi semua
            if( tb != '' && bb != ''){
                // perhitungan
                let hasilBMI = Math.round(bb/((tb/100)**2)); 

                // ubah warna di table
                elementsbefore = document.getElementsByClassName('nilaiIdeal');
                for (let i = 0; i < elementsbefore.length; i++) {
                    elementsbefore[i].removeAttribute('style');
                }

                if (hasilBMI < 20) {
                    let simpulan = 'kurus';
                    document.getElementById('hasilBMI').innerHTML = `<h4 class="text-center">`+hasilBMI+` poin (`+simpulan+`)</h4>`;
                    document.getElementById('kurus').style.border = "solid 4px red";
                    document.getElementById('kurus').style.textShadow = "1px 1px 3px white";
                }else if(hasilBMI < 25){
                    let simpulan = 'Ideal';
                    document.getElementById('hasilBMI').innerHTML = `<h4 class="text-center">`+hasilBMI+` poin (`+simpulan+`)</h4>`;
                    document.getElementById('ideal').style.border = "solid 4px red";
                    document.getElementById('ideal').style.textShadow = "1px 1px 3px white";
                }else if(hasilBMI < 30){
                    let simpulan = 'Gemuk';
                    document.getElementById('hasilBMI').innerHTML = `<h4 class="text-center">`+hasilBMI+` poin (`+simpulan+`)</h4>`;
                    document.getElementById('gemuk').style.border = "solid 4px red";
                    document.getElementById('gemuk').style.textShadow = "1px 1px 3px white";
                }else if(hasilBMI < 40){
                    let simpulan = 'Obesitas';
                    document.getElementById('hasilBMI').innerHTML = `<h4 class="text-center">`+hasilBMI+` poin (`+simpulan+`)</h4>`;
                    document.getElementById('obesitas').style.border = "solid 4px red";
                    document.getElementById('obesitas').style.textShadow = "1px 1px 3px white";
                }else{
                    let simpulan = 'Obesitas Ekstrim';
                    document.getElementById('hasilBMI').innerHTML = `<h4 class="text-center">`+hasilBMI+` poin (`+simpulan+`)</h4>`;
                    document.getElementById('obesitasEkstrim').style.border = "solid 4px red";
                    document.getElementById('obesitasEkstrim').style.textShadow = "1px 1px 3px white";
                }  

                // print nilai hasil

                

                var elements = document.getElementsByClassName(`_`+hasilBMI);
                for (let i = 0; i < elements.length; i++) {
                    // elements[i].style.backgroundColor = "white";
                    elements[i].style.border = "solid 4px red";
                    elements[i].style.fontWeight = "900";
                    elements[i].style.textShadow = "1px 1px 3px white";
                }

            }
        })
    }

// Form dan Perhitungan Borca ===============================================================================

    // dengan class harus menggunakan for untuk memetakan tiap tiap class
    var buttonCek = document.getElementsByClassName('cekFormBorca');
    for (let i = 0; i < buttonCek.length; i++) {

        // button yang dipetakan jika diberi input jalankan function
        buttonCek[i].addEventListener("input",function () {

            // ambil data
            jk = document.getElementById('jenisKelaminBorca').value;
            tb = document.getElementById('tinggiBadanBorca').value;

            // cek form terisi semua
            if(jk != '' && tb != ''){
                
                // cek jenis kelamin
                // pria
                if(jk == 'pria'){
                    let hasilBorca = (tb-100)-((tb-100)*10/100);

                    if (hasilBorca > 0) {
                        document.getElementById('hasilBorca').innerHTML = `<h5 class="text-center">Berat Badan Yang baik untuk anda adalah :</h5><br><h3 class="text-center">`+hasilBorca+` kg</h3><br>`;
                    }
                // wanita
                }else{
                    let hasilBorca = (tb-100)-((tb-100)*15/100);

                    if (hasilBorca > 0) {
                        document.getElementById('hasilBorca').innerHTML = `<h5 class="text-center">Berat Badan Yang baik untuk anda adalah :</h5><br><h3 class="text-center">`+hasilBorca+` kg</h3><br>`;
                    }
                }
            }
        })
    }

// Tabel Ideal ========================================================================================
    let data = [[152,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],
                [154,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,36,37,38,39,40],
                [157,18,19,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,33,34,35,36,37,38,39],
                [160,17,18,19,20,21,22,23,24,24,25,26,27,28,29,30,31,32,32,33,34,35,36,37,38],
                [162,17,18,18,19,20,21,22,23,24,24,25,26,27,28,29,30,31,31,32,33,34,35,36,37],
                [165,16,17,18,19,20,20,21,22,23,24,25,25,26,27,28,29,30,30,31,32,33,34,35,35],
                [167,16,17,17,18,19,20,21,21,22,23,24,25,25,26,27,28,29,29,30,31,32,33,34,34],
                [170,15,16,17,18,18,19,20,21,22,22,23,24,25,25,26,27,28,29,29,30,31,32,33,33],
                [172,15,16,16,17,18,19,19,20,21,22,22,23,24,25,25,26,27,28,28,29,30,31,32,32],
                [175,14,15,16,17,17,18,19,20,20,21,22,22,23,24,25,25,26,27,28,28,29,30,31,31],
                [177,14,15,15,16,17,18,18,19,20,20,21,22,23,23,24,25,25,26,27,28,28,29,30,30],
                [180,14,14,15,16,16,17,18,18,19,20,21,21,22,23,23,24,25,25,26,27,28,28,29,30],
                [182,13,14,14,15,16,17,17,18,19,19,20,21,21,22,23,23,24,25,25,26,27,27,28,29],
                [185,13,13,14,15,15,16,17,17,18,19,19,20,21,21,22,23,23,24,25,25,26,27,27,28],
                [187,12,13,14,14,15,16,16,17,18,18,19,19,20,21,21,22,23,23,24,25,25,26,27,27],
                [190,12,13,13,14,15,15,16,16,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,26],
                [193,12,12,13,14,14,15,15,16,17,17,18,18,19,20,20,21,22,22,23,23,24,25,25,26]
            ];

    document.getElementById('tableBadanIdeal').insertRow(-1).innerHTML = 
        `<tr>
            <td>Berat (kg)</td>
            <td>45</td>
            <td>47</td>
            <td>50</td>
            <td>52</td>
            <td>54</td>
            <td>56</td>
            <td>59</td>
            <td>61</td>
            <td>63</td>
            <td>65</td>
            <td>68</td>
            <td>70</td>
            <td>72</td>
            <td>75</td>
            <td>77</td>
            <td>79</td>
            <td>81</td>
            <td>84</td>
            <td>86</td>
            <td>88</td>
            <td>90</td>
            <td>93</td>
            <td>95</td>
            <td>97</td>
        </tr>`;

    document.getElementById('tableBadanIdeal').insertRow(-1).innerHTML = 
        `<tr>
            <td>Tinggi (cm)</td>
            <td class="nilaiIdeal" id="kurus" colspan="3">Kurus</td>
            <td class="nilaiIdeal" id="ideal" colspan="4">Ideal</td>
            <td class="nilaiIdeal" id="gemuk" colspan="5">Gemuk</td>
            <td class="nilaiIdeal" id="obesitas" colspan="7">Obesitas</td>
            <td class="nilaiIdeal" id="obesitasEkstrim" colspan="5">Obesitas Ekstrim</td>
        </tr>`;

    data.forEach(e => {
    document.getElementById('tableBadanIdeal').insertRow(-1).innerHTML = `<tr>
        <td class='nilaiIdeal _`+e[0]+`'>`+e[0]+`</td>
        <td class='nilaiIdeal _`+e[1]+`'>`+e[1]+`</td>
        <td class='nilaiIdeal _`+e[2]+`'>`+e[2]+`</td>
        <td class='nilaiIdeal _`+e[3]+`'>`+e[3]+`</td>
        <td class='nilaiIdeal _`+e[4]+`'>`+e[4]+`</td>
        <td class='nilaiIdeal _`+e[5]+`'>`+e[5]+`</td>
        <td class='nilaiIdeal _`+e[6]+`'>`+e[6]+`</td>
        <td class='nilaiIdeal _`+e[7]+`'>`+e[7]+`</td>
        <td class='nilaiIdeal _`+e[8]+`'>`+e[8]+`</td>
        <td class='nilaiIdeal _`+e[9]+`'>`+e[9]+`</td>
        <td class='nilaiIdeal _`+e[10]+`'>`+e[10]+`</td>
        <td class='nilaiIdeal _`+e[11]+`'>`+e[11]+`</td>
        <td class='nilaiIdeal _`+e[12]+`'>`+e[12]+`</td>
        <td class='nilaiIdeal _`+e[13]+`'>`+e[13]+`</td>
        <td class='nilaiIdeal _`+e[14]+`'>`+e[14]+`</td>
        <td class='nilaiIdeal _`+e[15]+`'>`+e[15]+`</td>
        <td class='nilaiIdeal _`+e[16]+`'>`+e[16]+`</td>
        <td class='nilaiIdeal _`+e[17]+`'>`+e[17]+`</td>
        <td class='nilaiIdeal _`+e[18]+`'>`+e[18]+`</td>
        <td class='nilaiIdeal _`+e[19]+`'>`+e[19]+`</td>
        <td class='nilaiIdeal _`+e[20]+`'>`+e[20]+`</td>
        <td class='nilaiIdeal _`+e[21]+`'>`+e[21]+`</td>
        <td class='nilaiIdeal _`+e[22]+`'>`+e[22]+`</td>
        <td class='nilaiIdeal _`+e[23]+`'>`+e[23]+`</td>
        <td class='nilaiIdeal _`+e[24]+`'>`+e[24]+`</td>
        </tr>`;
    });