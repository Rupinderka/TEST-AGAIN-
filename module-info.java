module com.example.likedislike {
    requires javafx.controls;
    requires javafx.fxml;

    requires com.almasb.fxgl.all;

    opens com.example.likedislike to javafx.fxml;
    exports com.example.likedislike;
}