import React, {Component} from 'react';
import { ScrollView, View, Image} from 'react-native';
import styles from "./styles";


export default class ScrollOne extends Component {
    render() {
        return (
            <View style={styles.firstScroll.container}>
                <View style={styles.firstScroll.viewStyle}>
                <ScrollView horizontal={true}>
                        <Image source={{ uri: 'https://rynekisztuka.pl/wp-content/uploads/2015/06/a-wheatfield-with-cypresses-1889_1506.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://images.photowall.com/products/45115/van-gogh-wincent-starry-night.jpg?h=699&q=85'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://artnapi.pl/pol_pl_Sloneczniki-Van-Gogh-198_1.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://ipicasso.pl/image/cache/data/goods/00000004843-800x800.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://img.pixers.pics/pho(s3:700/PI/42/51/700_PI4251_112f8e3a5ad694be2a87d8af03d3a551_5b7abc4540b35_.,700,559,jpg)/poduszki-dekoracyjne-vincent-van-gogh-ogrod-oliwny.jpg.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://www.artmajeur.com/medias/hero_new/b/a/bastien-alleaume/blog/van-gogh-le-semeur-1888-dapres-millet.jpg'}} style={styles.firstScroll.scrollView}/>
                        <Image source={{ uri: 'https://ocdn.eu/pulscms-transforms/1/c5hk9kpTURBXy9lYWZmZDkyZmRiYzNkODA5ODI3Nzg1YWJkYmFhY2FjZi5wbmeTlQMAAM0HgM0EOJMFzQMUzQG8kwmmNDJiNzkxBoGhMAE/vincent-van-gogh-w-wyobrazeniu-tworcow-filmu-twoj-vincent-rez-dorota-kobiela-i-hugh-welchman-2017.jpg'}} style={styles.firstScroll.scrollView}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}