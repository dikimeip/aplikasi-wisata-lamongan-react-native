import React, { Component } from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'

const PengaduanMenu = () => {
    return (
        <View style={{ flex: 1, marginHorizontal: 10, }}>
            {/* judul form */}
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>FORM PENGADUAN</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}> DINAS PARIWISATA KABUPATEN LAMONGAN</Text>
            </View>
            {/* form input  */}
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Nama</Text>
                <TextInput placeholder="Masukan Nama Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Email</Text>
                <TextInput placeholder="Masukan email Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Masukan Isi Pengaduan</Text>
                <TextInput multiline={true} placeholder="Masukan pengaduan Anda" style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 20, height: 300, }} />
                <TouchableOpacity style={{ backgroundColor: 'green', paddingVertical: 15, paddingHorizontal: 15, borderRadius: 20, marginTop: 20, }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>KIRIM</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PengaduanMenu
